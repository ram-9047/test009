const express = require("express");
const { sendEmailController } = require("../controllers/email.js");

const router = express.Router();

// Define the POST route for sending email
router.post("/save", sendEmailController);

module.exports = router;
