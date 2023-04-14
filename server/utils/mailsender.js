var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
const db = require('../db');



const sendMail = (email) => {

  const otpgenerated= otpGenerator.generate(4, { upperCaseAlphabets: false,lowerCaseAlphabets:false, specialChars: false });
  console.log(otpgenerated);

   console.log(email);
   var emailuser=email;

  var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ayush4002gupta@gmail.com",
      pass: "zjeahkmnwwlzzthu"
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  var mailOptions = {
    from: '"Ayush" <ayush4002gupta@gmail.com>',
    to: emailuser,
    subject: 'Nice Nodemailer test',
    text:`Hey there, This is your otp for verification : ${otpgenerated}`,
    html: `<b>Hey there! </b>This is your otp for verification : ${otpgenerated}`,

  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(info);
    console.log('Message sent: %s', info.messageId);


    db.query("UPDATE login SET otp=? WHERE email=? ", [otpgenerated,email], (err, result) => {
      if (err) {
        console.log(err)
      }
      
      console.log(result)

      setInterval(deleteotp,120000,email);

    });

  });


}

const deleteotp =(email)=>{

  var empty="";
  db.query("UPDATE login SET otp=? WHERE email=?;", [empty,email], (err, result) => {
    if (err) {
      console.log(err)
    }

    console.log(err)
 
    
  });

}



module.exports = sendMail;