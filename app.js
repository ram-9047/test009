const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/index.js");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route for testing server status
app.get("/", (req, res) => {
  res.status(200).send("Email API is running!");
});

// Mount email routes
app.use("/api", emailRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
