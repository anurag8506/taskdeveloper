import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      }, 
    });

    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: email,
      subject: 'Thank You for Subscribing',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>🎉 Welcome to Amazone Seller Support!</h2>
          <p>Thanks for subscribing to our newsletter.</p>
          <p>Get ready to receive exciting updates and offers. ❤️</p>
          <br/>
          <p>Cheers,<br/>Team Amazone Seller Support</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);



  

    // 📩 Admin notification
    const adminMail = {
      from: process.env.MAIL_EMAIL,
      to: process.env.MAIL_EMAIL,
      subject: 'New Subscription Alert',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>📥 New Subscriber!</h2>
        
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p>Cheers,<br/>Notification System</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);

    return NextResponse.json({ success: true, message: 'Subscription email sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
