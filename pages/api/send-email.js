// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, date, slot } = req.body;

    console.log(`Attempting to send email to: ${email}`);

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.PASSWORD, // your email password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Appointment Confirmation',
      text: `Hello ${name},\n\nYour appointment is confirmed for ${date} during the ${slot} slot.\n\nThank you!`,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
