const express = require("express");
const router = express.Router();
const { askGemini } = require("../services/geminiService");

router.post("/", async (req, res) => {
  try {
    // 1. Grab user message from frontend
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // 2. Pass it to Gemini service
    const aiResponse = await askGemini(message);

    // 3. Send back clean response
    res.json({ reply: aiResponse });
  } catch (error) {
    console.error("Chat route error:", error);
    res.status(500).json({ error: "Failed to get response from Gemini" });
  }
});

module.exports = router;
