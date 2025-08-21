export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About This Project</h1>
      <p className="text-lg text-zinc-600 mb-6">
        This project was built during a hackathon to help students in 12th grade
        find soulful, supportive guidance about their university journey.
        The AI counselor listens, understands, and provides thoughtful advice.
      </p>
      <p className="text-zinc-500 italic">
        Crafted with 💙 using React, Node.js, Firestore, and Google Gemini.
      </p>
    </div>
  );
}
