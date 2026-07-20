import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Construct the email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Job Title:</strong> ${jobTitle || 'N/A'}</p>
      <p><strong>Agreed to Privacy:</strong> ${agreeToPrivacy !== undefined ? (agreeToPrivacy ? 'Yes' : 'No') : 'N/A'}</p>
      <br />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Sentientware Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact from ${fullName} (${company || 'Website'})`,
      html: htmlContent,
      replyTo: email,
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
