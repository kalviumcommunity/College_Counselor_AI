import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";


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
          <Link
            to="/chat"
            className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-blue-100 transition"
          >
            Chat
          </Link>
        </div>
        </nav>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}
