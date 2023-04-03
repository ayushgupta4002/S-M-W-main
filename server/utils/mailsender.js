var nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "ayush4002gupta@gmail.com",
    pass: "pjugyhzmdldlgfie"
  },
  tls: {
    rejectUnauthorized: false
}
});
const sendMail=async(res,req)=>{

    var mailOptions = {
        from: '"Ayush" <ayush4002gupta@gmail.com>',
        to: 'harshulgupta56@gmail.com',
        subject: 'Nice Nodemailer test',
        text: 'Hey there, it’s our first message sent with Nodemailer ',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br />',
      
      };
      transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});

}



module.exports=sendMail;