const express = require("express");
const router = express.Router();
const { askGemini } = require("../services/geminiService");
const { cleanResponse } = require("../utils/responseShaper");

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const aiResponse = await askGemini(message);

    // ✨ Pass Gemini’s reply through the shaper
    const finalReply = cleanResponse(aiResponse);

    res.json({ reply: finalReply });
  } catch (error) {
    console.error("Chat route error:", error);
    res.status(500).json({ error: "Failed to get response from Gemini" });
  }
});

module.exports = router;
