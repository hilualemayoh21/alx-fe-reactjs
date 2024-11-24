import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authToken"); // Simulated authentication
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

// ProtectedRoute Component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authToken"); // Simulated authentication
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
