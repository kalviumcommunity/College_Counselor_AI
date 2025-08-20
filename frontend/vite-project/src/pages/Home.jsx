import { useEffect, useState } from "react";
import { fetchHello, fetchFirestore } from "../api";

export default function Home() {
  const [backendMsg, setBackendMsg] = useState("");
  const [firestoreMsg, setFirestoreMsg] = useState("");

  useEffect(() => {
    fetchHello()
      .then((data) => setBackendMsg(data.message))
      .catch((err) => console.error("Error fetching backend:", err));

    fetchFirestore()
      .then((data) => setFirestoreMsg(data.data?.message || "No message found"))
      .catch((err) => console.error("Error fetching Firestore:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-2 text-lg text-gray-700">
        Backend says: <span className="font-mono">{backendMsg}</span>
      </p>
      <p className="mt-2 text-lg text-gray-700">
        Firestore says: <span className="font-mono">{firestoreMsg}</span>
      </p>
    </div>
  );
}