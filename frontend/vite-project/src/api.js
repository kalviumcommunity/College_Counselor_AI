const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchHello() {
  const res = await fetch(`${API_BASE_URL}/api/hello`);
  return res.json();
}

export async function fetchFirestore() {
  const res = await fetch(`${API_BASE_URL}/api/test-firestore`);
  return res.json();
}

export async function sendChatMessage(message) {
  const res = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) throw new Error(`Chat request failed: ${res.status}`);
  return res.json();
}

export async function fetchRecommendations(conversation) {
  const res = await fetch(`${API_BASE_URL}/api/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ conversation }),
  });
  if (!res.ok) {
    throw new Error(`Recommendation request failed: ${res.status}`);
  }
  return res.json();
}
