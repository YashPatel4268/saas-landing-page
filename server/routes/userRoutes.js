// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const token = crypto.randomBytes(32).toString('hex');

  const newUser = new User({ name, email, password, verificationToken: token });
  await newUser.save();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your Email',
    html: `<h3>Thanks for registering!</h3>
           <p>Please verify your email by clicking the link below:</p>
           <a href="http://localhost:5000/api/users/verify/${token}">Verify Email</a>`
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: 'Verification email sent!' });
});

router.get('/verify/:token', async (req, res) => {
  const user = await User.findOne({ verificationToken: req.params.token });
  if (!user) return res.status(400).send('Invalid verification link');

  user.isVerified = true;
  user.verificationToken = '';
  await user.save();

 res.redirect('http://localhost:3000/success');

});

module.exports = router;
