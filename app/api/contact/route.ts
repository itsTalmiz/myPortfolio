import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email
    pass: process.env.SMTP_PASS, // Your email password or app password
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a2332; color: white; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; color: #f97316;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; color: #ccc;">From your portfolio website</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1a2332; margin: 0 0 10px 0; border-bottom: 2px solid #f97316; padding-bottom: 5px;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #f97316;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div>
              <h3 style="color: #1a2332; margin: 0 0 10px 0; border-bottom: 2px solid #f97316; padding-bottom: 5px;">Message</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #f97316; border-radius: 5px;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This message was sent from your portfolio contact form on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      // Auto-reply to sender
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Alex Thompson - Hardware Engineer',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a2332; color: white; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; color: #f97316;">Thank You for Your Message!</h1>
            <p style="margin: 10px 0 0 0; color: #ccc;">Alex Thompson - Hardware Embedded Systems Engineer</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I appreciate your interest in working together.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              I'll review your message carefully and get back to you within 24-48 hours. In the meantime, feel free to check out my latest projects and technical articles on my website.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #f97316; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #1a2332; margin: 0 0 10px 0;">Your Message Summary:</h3>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0;"><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              Best regards,<br>
              <strong>Alex Thompson</strong><br>
              Hardware Embedded Systems Engineer<br>
              <a href="mailto:alex.thompson@email.com" style="color: #f97316;">alex.thompson@email.com</a>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}