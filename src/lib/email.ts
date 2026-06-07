import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<void> {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.CONTACT_EMAIL,
    subject: `NeoForge Contact: ${data.subject || 'New Message'} from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7C3AED;">New Contact Message — NeoForge</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name:</td>
            <td style="padding: 8px;">${data.name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Subject:</td>
            <td style="padding: 8px;">${data.subject || 'No subject'}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 8px; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Sent from NeoForge contact form at ${new Date().toISOString()}
        </p>
      </div>
    `,
    replyTo: data.email,
  });
}
