import React, { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      setError("");
      setUsers([]);
      setPage(1); // Reset to the first page

      console.log("Search criteria:", {
        userName: userName.trim(),
        location: location.trim(),
        minRepos: minRepos.trim(),
      }); // Debugging log to check input values

      // Try with reduced filters for testing
      const results = await fetchUserData({
        userName: userName.trim() || "", // Allow empty search for username
        location: location.trim(),
        minRepos: minRepos.trim() || "", // Allow empty minRepos for testing
      });

      console.log("Search results:", results); // Log the search results for debugging
      setUsers(results);
      setIsLoading(false);
    } catch (err) {
      console.error("Error during search:", err); // Log the error for debugging
      setError("Failed to fetch users. Please try again.");
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const nextPage = page + 1;
      console.log("Loading next page:", nextPage); // Debugging log for pagination

      const results = await fetchUserData({
        userName: userName.trim() || "",
        location: location.trim(),
        minRepos: minRepos.trim() || "",
        page: nextPage,
      });

      console.log("More results:", results); // Log additional results for debugging
      setUsers((prevUsers) => [...prevUsers, ...results]);
      setPage(nextPage);
      setIsLoading(false);
    } catch (err) {
      console.error("Error loading more users:", err); // Log the error for debugging
      setError("Failed to load more users.");
      setIsLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Search Form */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Min Repositories"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results Section */}
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{user.login}</h3>
                <p>📦 {user.public_repos || "N/A"} Repositories</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-6 hover:bg-gray-400"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
