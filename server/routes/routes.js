const express = require('express');
const {  resendotp, register, otpmain, login} = require('../controllers/RegisterLogin');
const sendMail = require('../utils/mailsender');
const router = express.Router();

router.route("/resendotp").get(resendotp);

router.route("/register").post(register);
router.route("/otp").post(otpmain);
router.route("/login").post(login);


module.exports=router;
