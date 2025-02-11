const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv configuration
dotenv.config();

// Rest object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// static file access
app.use(express.static(path.join(__dirname, "./client/build")));

// Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
