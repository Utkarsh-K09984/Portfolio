import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
  throw new Error("Email configuration is missing in environment variables");
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Contact Form Message from ${email}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>From:</strong> ${email}</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to', process.env.EMAIL_USER);
      
      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
      );
    } catch (sendError: any) {
      console.error('Nodemailer Error:', {
        message: sendError.message,
        code: sendError.code,
      });
      
      return NextResponse.json(
        { 
          error: "Failed to send email. Please try again later.",
          details: process.env.NODE_ENV === 'development' ? sendError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
} 