const admin = require("firebase-admin");

// service account json to be plugged in here
let db;

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }
  db = admin.firestore();
  console.log("Firestore initialized (placeholder config)");
} catch (error) {
  console.error("Firestore not connected yet:", error.message);
  db = null;
}

module.exports = db;
