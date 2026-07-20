import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getAdminEmailTemplate, getUserEmailTemplate } from '@/utils/emailTemplates';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const firstName = data.firstName || data.name || '';
    const lastName = data.lastName || '';
    const fullName = firstName + (lastName ? ' ' + lastName : '');
    const { email, company, jobTitle, phone, message, agreeToPrivacy } = data;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminHtml = getAdminEmailTemplate({
      fullName,
      email,
      phone,
      company,
      jobTitle,
      agreeToPrivacy,
      message,
    });

    const userHtml = getUserEmailTemplate({
      fullName,
      email,
    });

    // Send the email to the admin
    await transporter.sendMail({
      from: `"Sentientware Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact from ${fullName} (${company || 'Website'})`,
      html: adminHtml,
      replyTo: email,
    });

    // Send the auto-reply to the user
    await transporter.sendMail({
      from: `"Sentientware Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Welcome to SentientWare! 🎉`,
      html: userHtml,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
