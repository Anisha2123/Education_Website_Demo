

const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("Contact api hit");
  console.log(req.body);

  // Save to DB
  const newContact = new Contact({ name, email, phone, message });
  await newContact.save();

  // // Send email
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.ADMIN_EMAIL,
  //     pass: process.env.ADMIN_PASS
  //   }
  // });

  // const mailOptions = {
  //   from: email,
  //   to: process.env.ADMIN_EMAIL,
  //   subject: `New Inquiry from ${name}`,
  //   text: `Phone: ${phone}\n\nMessage:\n${message}`
  // };

  try {
    // await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;
