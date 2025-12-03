const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to safely return the API key
app.get("/api-key", (req, res) => {
  const apiKey = process.env.API_KEY_1; // GitHub Codespace environment secret
  if (!apiKey) {
    return res.status(500).json({ error: "API_KEY_1 not set" });
  }
  res.json({ apiKey });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
