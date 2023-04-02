const express = require('express');
const {  trying} = require('../controllers/RegisterLogin');
const router = express.Router();

router.route("/try").get(trying);

module.exports=router;
