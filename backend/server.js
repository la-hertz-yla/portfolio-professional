require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// Middlewares
app.use(
  cors({
    origin: [
      "https://la-hertz-yla.github.io",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API is running 🚀",
  });
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,                 // maximum 5 requêtes
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages. Please try again later.",
  },
});
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Vérification des champs
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to send message.",
    });
  }
});


// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app;