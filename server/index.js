const express = require('express');
const db = require('./db')
const cors = require('cors')
const store = require("store2");
var crypto = require("crypto");
const { register } = require('./controllers/RegisterLogin');
const routee = require('./routes/routes');
const router = express.Router();
const passport = require('passport');
const cookieSession = require('cookie-session');
const { profile } = require('console');
require('./utils/googleauth')
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json())
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/route",routee);


app.get("/failed", (req, res) => {
  res.send("Failed")
})
app.get("/success", (req, res) => {
  console.log(req.user.displayName)
  console.log(req.user)
  res.send(req.user)
})

app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

app.get('/google/callback',
  passport.authenticate('google', {
      failureRedirect: '/failed',
  }),
  function (req, res) {
    console.log(req.user.emails[0].value);
    var gemail=req.user.emails[0].value;
    console.log(gemail);
     
      try {
        db.query("SELECT * FROM login WHERE email=? ", [req.user.emails[0].value], (err, result) => {
          if (err) {
            console.log(err)
          }
          if (result.length > 0) {
           res.send(result);
          }
           else {
            
            db.query("INSERT INTO login (email,username,name)  VALUES (?, ?, ?)", [gemail,req.user.id,req.user.displayName], (err, result) => {
              if (err) {
                console.log(err)
              }
              console.log(err)
              
              
            });
          }
       
        })
    

      } catch (error) {
        console.log(error);
        
      }
      

  }
);



app.listen(PORT, () => {
  console.log(`Server is running on 8000`)
})