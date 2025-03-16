import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL, // Correct env variable name
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Health Check Route (Prevents Vercel Timeout)
app.get("/", (req, res) => {
  res.send("SMTP Server is Running ✅");
});

// ✅ Contact Form Endpoint (Prevents Timeout)
app.post("/sendMail", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Send success response first (Prevents Timeout)
  res.status(202).json({ success: true, message: "Email is being sent" });

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    // Send email asynchronously
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});

// ✅ Export Normally (No Need for `serverless-http`)
export default app;
