const db = require("../config/firebase");

async function findUniversities(profile) {
  let query = db.collection("universities");

  if (profile.budget) {
    query = query.where("fees_category", "==", profile.budget);
  }
  if (profile.state) {
    query = query.where("state", "==", profile.state);
  }
  if (profile.interests && profile.interests.length > 0) {
    query = query.where("programs", "array-contains-any", profile.interests);
  }

  query = query.limit(20);

  const snapshot = await query.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function findFallbackUniversities(profile, limit = 10) {
  let query = db.collection("universities");

  if (profile.interests && profile.interests.length > 0) {
    query = query.where("programs", "array-contains-any", profile.interests);
  } else if (profile.state) {
    query = query.where("state", "==", profile.state);
  }

  const snapshot = await query.limit(limit).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

module.exports = { findUniversities, findFallbackUniversities };
