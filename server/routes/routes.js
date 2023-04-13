const express = require('express');
const {  trying, register, otpmain} = require('../controllers/RegisterLogin');
const sendMail = require('../utils/mailsender');
const router = express.Router();

router.route("/try").get(trying);

router.route("/register").post(register);
router.route("/otp").post(otpmain);


module.exports=router;
