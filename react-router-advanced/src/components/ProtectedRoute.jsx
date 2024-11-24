import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute component to protect routes that require authentication
function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children (the protected component)
  return children;
}

export default ProtectedRoute;
