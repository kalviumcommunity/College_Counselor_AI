require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/firebase");

const chatRoutes = require("./routes/chatRoutes");
const universityRoutes = require("./routes/universityRoutes");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173", // Vite dev server
    "https://your-netlify-app.netlify.app", // Netlify frontend deployment
  ],
  methods: ["GET", "POST"],
}));
app.use(express.json());

// Root test
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Simple backend test
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from backend" });
});

// Firestore test
app.get("/api/test-firestore", async (req, res) => {
  try {
    const testDoc = db.collection("testCollection").doc("testDoc");

    // Write sample doc 
    await testDoc.set({ message: "Hello from Firestore!" });

    // Read it back
    const doc = await testDoc.get();
    res.json({ data: doc.data() });
  } catch (error) {
    console.error("Error fetching Firestore:", error);
    res.status(500).json({ error: "Firestore fetch failed" });
  }
});

// Feature routes
app.use("/api/chat", chatRoutes);
app.use("/api/universities", universityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
