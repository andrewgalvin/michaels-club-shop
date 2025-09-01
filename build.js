const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Read the admin key from environment variable or GitHub secret
const adminKey = process.env.ADMIN_KEY || "michael2025";

// Generate SHA-256 hash of the admin key
const adminKeyHash = crypto.createHash("sha256").update(adminKey).digest("hex");

// Read the HTML file
let html = fs.readFileSync("index.html", "utf8");

// Replace the admin key hash in the configuration
html = html.replace(
  /ADMIN_KEY_HASH: "[^"]*"/,
  `ADMIN_KEY_HASH: "${adminKeyHash}"`
);

// Write the processed file
fs.writeFileSync("index.html", html);

console.log("Build completed with admin key hash:", adminKeyHash);
console.log("Admin key:", adminKey);
