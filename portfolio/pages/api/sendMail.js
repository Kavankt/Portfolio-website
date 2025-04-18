import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kavankt602@gmail.com',
      pass: 'sswu grvk igxp ssvy' // Use App Password from Google
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'kavankt602@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later.' });
  }
}
