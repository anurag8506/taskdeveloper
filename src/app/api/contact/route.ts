import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import dbConnect from "@/lib/db";
import Contact from "@/models/contactus";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  services: { [key: string]: boolean };
  message: string;
  acceptTerms: boolean;
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData: ContactFormData = await req.json();

    // ✅ Always send email
    await sendEmail(formData);

    // ✅ Store in DB only if not exists
    const existing = await Contact.findOne({ email: formData.email });
    if (!existing) {
      await Contact.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        services: formData.services,
        message: formData.message,
      });
      console.log("📌 Contact saved in DB");
    } else {
      console.log("⚠️ Contact already exists, skipping DB insert");
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent!",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
