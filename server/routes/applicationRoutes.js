

const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Optional: Nodemailer setup (for confirmation emails)
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { name, email, phone, course } = req.body;

  try {
    // Save to MongoDB
    const newApp = new Application({ name, email, phone, course });
    await newApp.save();

    // Optional: Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Course Application Received',
      text: `Hello ${name},\n\nYour application for the course "${course}" has been received. We will contact you soon!\n\n- Pratibha Skill Development Center`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting application' });
  }
});

module.exports = router;
