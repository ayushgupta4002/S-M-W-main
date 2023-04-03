const express = require('express');
const {  trying, main, register} = require('../controllers/RegisterLogin');
const router = express.Router();

router.route("/try").get(trying);
router.route("/main").get(main);
router.route("/register").post(register);

module.exports=router;
