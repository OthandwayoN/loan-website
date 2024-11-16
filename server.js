const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

const emailUser = 'othandwayo.nobula1@gmail.com';
const emailPass = 'Luniko2001!';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { recipient, subject, text } = req.body;

  const mailOptions = {
    from: emailUser,
    to: recipient,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
