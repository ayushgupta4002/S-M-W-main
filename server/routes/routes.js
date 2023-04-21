const express = require('express');
const {  resendotp, register, otpmain, login} = require('../controllers/RegisterLogin');
const sendMail = require('../utils/mailsender');
const { isWebAuthenticated } = require('../utils/Auth');
const router = express.Router();

router.route("/resendotp").post( resendotp);

router.route("/register").post(register );
router.route("/otp").post(otpmain);
router.route("/login").post(login);


module.exports=router;
