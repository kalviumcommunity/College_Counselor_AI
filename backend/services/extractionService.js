require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const ALLOWED_BUDGETS = ["<5L", "5-15L", "15-30L", ">30L"];

const extractionInstruction = `
You are an information extraction assistant for a college counseling app.
Read the full conversation between a student and a counselor, and extract the
student's stated preferences as strict JSON matching this schema:

{
  "stream": string | null,
  "budget": "<5L" | "5-15L" | "15-30L" | ">30L" | null,
  "state": string | null,
  "interests": string[] | null
}

Rules:
- Use null for any field the student has NOT mentioned yet.
- For "budget", map ranges said by the student to the closest of the four enum
  values. "Under 5 lakh" -> "<5L", "5 to 15 lakh" -> "5-15L", "around 20 lakh"
  -> "15-30L", "above 30 lakh" -> ">30L".
- For "state", use the full Indian state name (e.g., "Tamil Nadu", "Karnataka",
  "Maharashtra"). If the student names a city, infer the state.
- For "interests", return an array of program names like
  ["Computer Science", "Mechanical", "AI/ML", "Biotech", "Business"].
- Return ONLY the JSON object. No explanation, no markdown.
`;

function buildConversationBlock(conversation) {
  return conversation
    .map((m) => `${m.role === "user" ? "Student" : "Counselor"}: ${m.text}`)
    .join("\n");
}

async function extractProfile(conversation) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.1,
    },
  });

  const prompt = `${extractionInstruction}\n\nConversation:\n${buildConversationBlock(
    conversation
  )}\n\nReturn the JSON object now.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { extractProfile, ALLOWED_BUDGETS };
