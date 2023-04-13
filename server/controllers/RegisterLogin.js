const db = require('../db');
var crypto = require("crypto");
const sendMail = require('../utils/mailsender');


exports.trying = async (req, res) => {
  res.status(200).json({ message: "its all good" });
};
exports.otpmain = async (req, res) => {
  try {
    
    var otp = req.body.otp
    db.query("SELECT * FROM login WHERE otp=?", [otp], (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result.length > 0) {
        res.send(result)
        console.log("user exists")
        db.query("UPDATE login SET verified=TRUE WHERE otp=? ", [otp], (err, result) => {
          if (err) {
            console.log(err)
          }
          console.log(result)
        });
      }
    });

  } catch (error) {
    console.log(error);

  }
};


exports.register = async (req, res) => {

  try {
    var email = req.body.email
    var name = req.body.name
    var username = req.body.username
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
        db.query("SELECT * FROM login WHERE username=? ", [username], (err, result) => {
          if (err) {
            console.log(err)
          }
          if (result.length > 0) {
            res.send(result)
            console.log("user with same username exists")
          }
          else {
            db.query("INSERT INTO login (email,password,username,name)  VALUES (?, ?, ?, ?)", [email, pass,username,name], (err, result) => {
              if (err) {
                console.log(err)
              }
              res.send(result)
              console.log(err)
              sendMail(email);
            });
          }
        });
      }
    })
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  };
};


