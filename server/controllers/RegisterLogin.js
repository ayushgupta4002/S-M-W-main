const db = require('../db');
var crypto = require("crypto");
const sendMail = require('../utils/mailsender');




exports.trying= async(req,res) =>{
  res.status(200).json({message :"its all good"});
};
exports.main= async(req,res) =>{
  res.status(200).json({message :"its all good"});
};

exports.register= async(req,res) =>{
  

  try {
    var email = req.body.email
    var password = req.body.password
    var sha256 = crypto.createHash("sha256");
    sha256.update(password, "utf8");//utf8 here
    var pass = sha256.digest("base64");
    console.log(pass);


    db.query("SELECT * FROM login WHERE email=? ", [email], (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result.length > 0) {
        res.send(result)
        console.log("user exists")
      } else {

        sendMail(email);
        
        db.query("INSERT INTO login (email,password)  VALUES (?, ?)", [email, pass], (err, result) => {
          if (err) {
            console.log(err)
          }
          
          res.send(result)
          console.log(err)
          
        });


      }

    });

 
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  };
};


