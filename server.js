const express = require("express");
const helmet = require("helmet");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');


const app = express();
const PORT = process.env.PORT || 3000;


// Security Middleware
app.use(helmet()); // Adds security headers
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src", "public")));

// Routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/api/users", userRoutes);

//code for serving the frontend
// View Engine
app.set('views', path.join(__dirname, 'views')); // Set views directory
app.set('view engine', 'ejs'); // Use EJS as the view engine

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
