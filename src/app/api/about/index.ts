/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextApiRequest, NextApiResponse } from "next";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// type Data = { ok: boolean; message?: string; error?: string };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ ok: false, message: "Method not allowed" });
//   }

//   const { name, email, subject, message } = req.body ?? {};

//   if (!name || !email || !message) {
//     return res.status(400).json({ ok: false, message: "Missing required fields" });
//   }

//   try {
//     await resend.emails.send({
//       from: process.env.FROM_EMAIL || "no-reply@example.com",
//       to: process.env.TO_EMAIL || "",
//       subject: subject || `New message from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
//       html: `
//         <p><strong>Name:</strong> ${escapeHtml(name)}</p>
//         <p><strong>Email:</strong> ${escapeHtml(email)}</p>
//         <p><strong>Message:</strong></p>
//         <div>${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
//       `,
//     });

//     return res.status(200).json({ ok: true, message: "Email sent" });
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     console.error("Resend error:", err);
//     return res.status(500).json({ ok: false, error: err?.message || "Failed to send" });
//   }
// }

// function escapeHtml(str: string) {
//   return String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = { ok: boolean; message?: string; error?: string };

// Professional email template function
function createEmailTemplate(name: string, email: string, subject: string, message: string) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                
                <div style="border-left: 4px solid #667eea; padding-left: 20px; margin-bottom: 25px;">
                    <h2 style="color: #667eea; margin: 0 0 10px 0; font-size: 22px;">Contact Information</h2>
                    <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #667eea; text-decoration: none;">${escapeHtml(email)}</a></p>
                    <p style="margin: 5px 0; font-size: 16px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                    <p style="margin: 5px 0; font-size: 14px; color: #666;"><strong>Received:</strong> ${currentDate}</p>
                </div>

                <div style="border-left: 4px solid #28a745; padding-left: 20px;">
                    <h3 style="color: #28a745; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border: 1px solid #e9ecef;">
                        <p style="margin: 0; font-size: 16px; white-space: pre-wrap;">${escapeHtml(message)}</p>
                    </div>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
                    <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject)}" 
                       style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; transition: background 0.3s ease;">
                        Reply to ${escapeHtml(name)}
                    </a>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
                <p>This email was sent from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

// Plain text version for better email client compatibility
function createPlainTextEmail(name: string, email: string, subject: string, message: string) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
NEW CONTACT FORM SUBMISSION

Contact Information:
━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Subject: ${subject}
Received: ${currentDate}

Message:
━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━
Reply to this email to respond directly to ${name}.
  `.trim();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body ?? {};

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      ok: false, 
      message: "Missing required fields: name, email, and message are required" 
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      ok: false, 
      message: "Please provide a valid email address" 
    });
  }

  try {
    const emailSubject = subject || `New Contact Form Submission from ${name}`;
    
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "no-reply@example.com",
      to: process.env.TO_EMAIL || "",
      replyTo: email, // Allow direct replies to the sender
      subject: emailSubject,
      text: createPlainTextEmail(name, email, emailSubject, message),
      html: createEmailTemplate(name, email, emailSubject, message),
    });

    return res.status(200).json({ 
      ok: true, 
      message: "Message sent successfully! We'll get back to you soon." 
    });
  } catch (err: any) {
    console.error("Failed to send email:", err);
    return res.status(500).json({ 
      ok: false, 
      error: "Failed to send message. Please try again later." 
    });
  }
}

function escapeHtml(str: string): string {
  if (typeof str !== 'string') return '';
  
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}