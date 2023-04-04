var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')



const sendMail = (email) => {

  const otp= otpGenerator.generate(4, { upperCaseAlphabets: false,lowerCaseAlphabets:false, specialChars: false });



  var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ayush4002gupta@gmail.com",
      pass: ""
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  var mailOptions = {
    from: '"Ayush" <ayush4002gupta@gmail.com>',
    to: email,
    subject: 'Nice Nodemailer test',
    text:`Hey there, This is your otp for verification : ${otp}`,
    html: `<b>Hey there! </b>This is your otp for verification : ${otp}`,

  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

}



module.exports = sendMail;