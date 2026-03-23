import nodemailer from "nodemailer"

type ServicesType = {
  [key: string]: boolean
}
const MAIL_EMAIL='info.amazonsellerdubai@gmail.com'
const MAIL_PASSWORD='ubcoxfhvcepiujqc'
export async function sendEmail(formData: {
  name: string
  email: string
  phone: string
  services: ServicesType
  message: string
}) {
  const { name, email, phone, services, message } = formData

  const servicesList =
    Object.keys(services)
      .filter((service) => services[service])
      .join(", ") || "No services selected"

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: MAIL_EMAIL,
      pass: MAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: MAIL_EMAIL, // ✅ use your Gmail
    replyTo: email,               // ✅ reply will go to user
    to: "info.amazonsellerdubai@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Services Required: ${servicesList}
      Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("✅ Email sent successfully")
  } catch (err) {
    console.error("❌ Email send error:", err)
    throw err
  }
}
