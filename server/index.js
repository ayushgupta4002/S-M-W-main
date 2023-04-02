const express = require('express');
const db = require('./db')
const cors = require('cors')
var crypto = require("crypto");

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.post("/register", (req, res) => {
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
});


app.post("/login", (req, res) => {
  try {
    var email = req.body.email
    var password = req.body.password
    
    var sha256 = crypto.createHash("sha256");
    sha256.update(password, "utf8");//utf8 here
    var pass = sha256.digest("base64");
   
    db.query("SELECT * FROM login WHERE email=? AND password=?", [email, pass], (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result.length > 0) {
        res.send(result)
        console.log("logined")
      } else {
        console.log("user doesn't exist");
      }

    });
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  };
});





app.listen(PORT, () => {
  console.log(`Server is running on 8000`)
})