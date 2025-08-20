// frontend/vite-project/src/api.js
export async function fetchHello() {
  const res = await fetch("http://localhost:5000/api/hello");
  return res.json();
}

export async function fetchFirestore() {
  const res = await fetch("http://localhost:5000/api/test-firestore");
  return res.json();
}
