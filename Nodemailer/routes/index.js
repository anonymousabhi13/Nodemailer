const express = require('express');
const router = express.Router();
const sendMail = require('./nodemailer');




router.get('/', function (req, res, next) {

  res.render('index');
});


module.exports = router;
