require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

console.log("Gemini API Key prefix:", apiKey?.slice(0, 6));

// Function to send a prompt to Gemini with retries
async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // switched to FLASH for higher free quota

    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        const result = await model.generateContent(prompt);
        const response = result.response.text();
        return response;
      } catch (err) {
        attempts++;
        if (err.status === 429 && attempts < maxAttempts) {
          console.warn(`Rate limit hit, retrying... (${attempts})`);
          await new Promise((res) => setTimeout(res, 2000 * attempts)); // wait 2s, 4s, 6s
        } else {
          throw err;
        }
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error.message || error);
    throw new Error("Failed to get response from Gemini");
  }
}

module.exports = { askGemini };
