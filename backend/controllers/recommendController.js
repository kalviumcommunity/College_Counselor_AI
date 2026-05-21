const { extractProfile } = require("../services/extractionService");
const { profileSchema } = require("../schemas/profileSchema");
const {
  findUniversities,
  findFallbackUniversities,
} = require("../services/universityService");

const FALLBACK_RESPONSE = {
  profile: null,
  universities: [],
  message:
    "I couldn't pull together your recommendations yet — could you tell me a bit more about your budget, stream, or preferred state?",
};

exports.handleRecommend = async (req, res) => {
  try {
    const { conversation } = req.body;

    if (!Array.isArray(conversation) || conversation.length === 0) {
      return res.status(400).json({
        error: "conversation must be a non-empty array of { role, text }.",
      });
    }

    // 1. Call Gemini with responseMimeType: application/json
    let rawJsonText;
    try {
      rawJsonText = await extractProfile(conversation);
    } catch (err) {
      console.error("Gemini extraction error:", err.message || err);
      return res.json(FALLBACK_RESPONSE);
    }

    // 2. JSON.parse inside try/catch — untrusted LLM output
    let parsed;
    try {
      parsed = JSON.parse(rawJsonText);
    } catch (err) {
      console.error("JSON.parse failed on Gemini output:", rawJsonText);
      return res.json(FALLBACK_RESPONSE);
    }

    // 3. Schema validation at the API boundary (Zod)
    const validation = profileSchema.safeParse(parsed);
    if (!validation.success) {
      console.error(
        "Profile schema validation failed:",
        validation.error.issues
      );
      return res.json(FALLBACK_RESPONSE);
    }

    const profile = validation.data;

    // 4. Need at least one constraint to query
    const hasAnyConstraint =
      profile.budget ||
      profile.state ||
      (profile.interests && profile.interests.length > 0);

    if (!hasAnyConstraint) {
      return res.json({
        profile,
        universities: [],
        message:
          "Tell me a bit more — your budget range, preferred state, or which streams interest you?",
      });
    }

    // 5. Firestore indexed query with the validated profile
    let universities = [];
    try {
      universities = await findUniversities(profile);

      // If strict query returned nothing, try a relaxed fallback query
      if (universities.length === 0) {
        universities = await findFallbackUniversities(profile);
      }
    } catch (err) {
      console.error("Firestore query error:", err.message || err);
      return res.json({
        ...FALLBACK_RESPONSE,
        profile,
      });
    }

    return res.json({
      profile,
      universities,
      message:
        universities.length > 0
          ? `Here are ${universities.length} colleges matching your preferences.`
          : "I couldn't find a perfect match in our catalog yet — try broadening your budget or interests.",
    });
  } catch (err) {
    console.error("recommendController unexpected error:", err);
    return res.json(FALLBACK_RESPONSE);
  }
};
