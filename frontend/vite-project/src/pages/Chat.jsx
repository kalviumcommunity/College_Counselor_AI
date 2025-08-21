import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Add welcome message on first load
  useEffect(() => {
    const welcomeMessage = {
      role: "ai",
      text: "👋 Hello! I'm your College Counselor AI. How can I assist you with your college journey today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([welcomeMessage]);
  }, []);
  
  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMessage = {
        role: "ai",
        text: data.reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Error talking to Gemini:", err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Something went wrong. Try again.", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[90vh] max-w-2xl mx-auto p-4 bg-gradient-to-b from-zinc-50 to-zinc-100 rounded-xl shadow-lg">
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-end gap-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* Avatar */}
            {msg.role === "ai" && (
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow">
                <Bot size={18} />
              </div>
            )}

            {/* Bubble */}
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-zinc-700 border"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-xs text-zinc-400 mt-1">
                {msg.time}
              </span>
            </div>

            {/* User Avatar */}
            {msg.role === "user" && (
              <div className="w-8 h-8 bg-zinc-400 text-white rounded-full flex items-center justify-center shadow">
                <User size={18} />
              </div>
            )}
          </motion.div>
        ))}

        {/* Typing animation */}
        {loading && (
          <div className="flex items-center gap-2 text-zinc-500">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow">
              <Bot size={18} />
            </div>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:200ms]"></span>
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:400ms]"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center mt-2 border rounded-full bg-white shadow px-3 py-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 focus:outline-none rounded-full"
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
