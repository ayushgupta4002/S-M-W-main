const db = require('../db');
const jwt = require("jsonwebtoken");
const secret="mynameisayush9999573562@123456789";
//middleware to give access routes access to authorized user only

exports.isWebAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Please login first!",
      });
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    const query = `SELECT * FROM student WHERE enrollment_no = ${decoded.email}`;

    db.query(query, (error, result) => {
      if (error) {
        throw error;
      }
      if (result.length == 0) {
        return res.status(404).json({ message: "Invalid Token!" });
      } else {
        // req.user = reuslt[0];
        req.user = result[0];

        next();
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

