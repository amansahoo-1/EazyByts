const express = require("express");
const { sendEmailController } = require("../Controllers/portfolioControllers");

// Router object
const router = express.Router();

// Routes
router.post("/sendemail", sendEmailController); // Fixed typo

// Export
module.exports = router;
