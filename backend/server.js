import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import serverless from 'serverless-http';
import dotenv from 'dotenv';

// Load environment variables from .env file (for local development)
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: `${process.env.frontend_URL}`, // Your deployed frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
app.get("/msg", (req, res) => {
    res.send("hello there chutya");
});
// Contact form endpoint
app.post('/', async (req, res) => {
     alert("chutya")
  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Export as a serverless function for Vercel
export default serverless(app);

