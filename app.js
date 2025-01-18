const express = require("express");
const path = require("path");

const app = express();

// Middleware to serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route for the home page (Booking form)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route for booking success page
app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
