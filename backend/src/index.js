// Import Nodemailer at the beginning of the 'index.js' file
const nodemailer = require('nodemailer');

// Add this function inside the '/send-email' route handler
async function sendEmail(name, email, message) {
  // Replace these credentials with your email service provider details
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'boulderpaella@gmail.com',
      pass: 'fsdfgdfsf',
    },
  });
    //target:
  //boulderpaella@gmail.com
    //g-suite account if you want to log in with a @domain
  // support@boulderpaella.com 
    // sales@boulderpaella.com 
    //receive an email... with @domain, just use foward 
    //sending an email... with @domain, more difficult doing it through it through node
  const mailOptions = {
    from: email,
    to: 'boulderpaella@gmail.com', // Replace with your email address
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//telling node to use express to handle the routes, just grabs it
const app = express();
const port = process.env.PORT || 5001;

//this is middleware, when you put it in production, specify an origin
app.use(cors({
origin: 'boulderpaella.com'
}));
//parse the json to read it 
app.use(bodyParser.json());
//
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    // sendEmail(name, email, message);
    console.log(name, email, message )
    res.status(200).send('Email sent successfully');
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
