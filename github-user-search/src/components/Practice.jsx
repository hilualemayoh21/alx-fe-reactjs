import axios from "axios";
import React, { useState } from "react";

function Practice() {
  const [userName, setUserName] = useState(""); // Input username
  const [user, setUser] = useState(null); // Single user object
  const [error, setError] = useState(""); // Error message

  const fetchUsers = async () => {
    try {
      setError(""); // Clear previous errors
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUser(response.data); // Set user data
    } catch (err) {
      console.error("Failed to fetch data", err);
      setError("User not found or failed to fetch data.");
      setUser(null); // Clear user data
    }
  };

  return (
    <div>
      {/* Search Section */}
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-60 rounded-lg outline-none px-3"
          placeholder="Enter GitHub username"
        />
        <button
          onClick={fetchUsers}
          className="bg-fuchsia-400 text-fuchsia-50 px-3 py-1 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Error Section */}
      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* User Data Section */}
      {user ? (
        <div className="mt-5 p-4 border rounded-lg shadow-md">
          <p>
            <strong>Username:</strong> {user.login}
          </p>
          <p>
            <strong>Name:</strong> {user.name || "N/A"}
          </p>
          <p>
            <strong>Followers:</strong> {user.followers}
          </p>
          <p>
            <strong>Following:</strong> {user.following}
          </p>
          <p>
            <strong>Repositories:</strong> {user.public_repos}
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View GitHub Profile
          </a>
        </div>
      ) : (
        !error && <p className="mt-5">Please search for a GitHub username.</p>
      )}
    </div>
  );
}

export default Practice;
