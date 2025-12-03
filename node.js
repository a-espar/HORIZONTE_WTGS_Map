// script.js
import fs from "fs";
import fetch from "node-fetch";

const apiKey = process.env.API_KEY_1;

async function main() {
  const resp = await fetch("https://example.com/api", {
    headers: { "Authorization": `Bearer ${apiKey}` }
  });

  const data = await resp.json();

  // Write to GitHub Pages folder
  fs.writeFileSync("public/data.json", JSON.stringify(data, null, 2));

  console.log("Generated public/data.json");
}

main();
