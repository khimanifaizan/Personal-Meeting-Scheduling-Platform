// backend/server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const User = require('./models/User');
const OTP = require('./models/OTP');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

// Send OTP via email
app.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Send OTP via email (you need to set up your email service)
    const transporter = nodemailer.createTransport({
      service: 'your-email-service',
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP for email verification is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    // Store the OTP in the database
    const otpRecord = new OTP({
      email,
      otp,
    });

    await otpRecord.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to send OTP' });
  }
});

// Verify OTP and register user
app.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    // Check if the OTP is valid
    const otpRecord = await OTP.findOne({ email, otp });

    if (!otpRecord) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    // Save user data in the database
    const user = new User({ email, password });
    await user.save();

    // Delete the OTP record after successful registration
    await OTP.findOneAndDelete({ email });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to verify OTP' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
