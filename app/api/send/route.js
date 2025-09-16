import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pranavarmarkar36@gmail.com", // Gmail sender
        pass: "kheh kzio unfg zhvz", // Gmail App Password
      },
    });

    // Email to YOU (notification)
    const mailToOwner = {
      from: `"${name}" <${email}>`,
      to: "renukafuse22@gmail.com", // you will receive messages here
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Auto-reply email to the sender
    const mailToSender = {
      from: `"Renuka Fuse" <renukafuse22@gmail.com>`,
      to: email,
      subject: "Reply from Renuka Fuse",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. 
        This is an automated response to let you know that we have received your email. 
        We appreciate your inquiry and will get back to you as soon as possible.</p>
        <p>Best Regards,<br/>Renuka Fuse</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToSender),
    ]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
