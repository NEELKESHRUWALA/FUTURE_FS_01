const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // 1. Save to MongoDB
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // 2. Send Email (Nodemailer)
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Portfolio Contact: ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact API Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
