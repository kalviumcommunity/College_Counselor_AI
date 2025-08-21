import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-lg">
            College Counselor AI
          </Link>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}
