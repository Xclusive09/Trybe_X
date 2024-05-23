import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import './config.js'; 
import User from './model.js'; 

const app = express();

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Configuring Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Handle form submission
app.post('/signup', async (req, res) => {
  const { fullName, email, courseOfStudy, level, technicalSkill, areaOfInterest, ReasonToJoin } = req.body;

  const userData = {
    fullName,
    email,
    courseOfStudy,
    level,
    technicalSkill,
    areaOfInterest,
    ReasonToJoin
  };

  try {
    // Store user data in MongoDB
    const newUser = new User(userData);
    await newUser.save();

    // Send email with group link
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to the Trybe_X Community!',
      html: 
      `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Welcome to the Trybe_X Community, ${fullName}!</h2>
      <p>Thank you for signing up! We are excited to have you join our community. Here is your group link: <a href="[GROUP LINK]">Join Group</a>.</p>
      <p>Best regards,<br>Tech Community</p>
    </div>
  `
    };

    await transporter.sendMail(mailOptions);

    res.redirect('/file path');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Error signing up. Please try again later!!!.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
