import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-zinc-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
          {/* Brand / Title (clickable to Home) */}
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-500 transition-colors"
          >
            College Counselor AI
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Chat
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
