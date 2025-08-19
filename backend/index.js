
const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const universityRoutes = require("./routes/universityRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/chat", chatRoutes);
app.use("/api/universities", universityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});