require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

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
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API is running 🚀",
  });
});

app.post("/api/contact", async(req, res) => {
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