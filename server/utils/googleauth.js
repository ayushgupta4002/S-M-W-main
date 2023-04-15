
const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "516441164519-po79k2ahohvmi2230h29ekun60pobcuj.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  
    console.log(profile)
    return done(null, profile);
 
    }
));


passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username, name: user.name });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });