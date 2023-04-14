const express = require('express');
const db = require('./db')
const cors = require('cors')
const store = require("store2");
var crypto = require("crypto");
const { register } = require('./controllers/RegisterLogin');
const routee = require('./routes/routes');
const router = express.Router();
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json())




app.use("/api/route",routee);





app.listen(PORT, () => {
  console.log(`Server is running on 8000`)
})