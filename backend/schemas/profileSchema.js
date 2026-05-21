const { z } = require("zod");
const { ALLOWED_BUDGETS } = require("../services/extractionService");

const profileSchema = z.object({
  stream: z.string().min(1).nullable(),
  budget: z.enum(ALLOWED_BUDGETS).nullable(),
  state: z.string().min(1).nullable(),
  interests: z.array(z.string().min(1)).nullable(),
});

module.exports = { profileSchema };
