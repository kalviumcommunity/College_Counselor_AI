// utils/responseShaper.js

function cleanResponse(text) {
  if (!text) return "";

  let output = text;

  // 1. Remove markdown symbols (*, #, etc.)
  output = output.replace(/[*#_`>~-]/g, "");

  // 2. Remove multiple spaces/newlines
  output = output.replace(/\s+/g, " ").trim();

  // 3. If too long, shorten it
  const words = output.split(" ");
  if (words.length > 120) {
    output = words.slice(0, 120).join(" ") + "... (shortened)";
  }

  return output;
}

module.exports = { cleanResponse };
