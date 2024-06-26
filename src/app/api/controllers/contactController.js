import { mailOptions, transporter } from "../utils/nodemailer.js";

export const contactpost = async () => {
  const reqBody = await request.json();
  const { name, email, phone, message, subject } = reqBody;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject || "Default Subject",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<h1>${
        subject || "Default Subject"
      }</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent succesfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed to send a email" });
  }
};
