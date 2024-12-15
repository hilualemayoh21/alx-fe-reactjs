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
      setPage(1);

      const results = await fetchUserData({ userName, location, minRepos });
      setUsers(results);
      if (results.length === 0)
        setError("No users found based on the criteria.");
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const nextPage = page + 1;
      const results = await fetchUserData({
        userName,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prevUsers) => [...prevUsers, ...results]);
      setPage(nextPage);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to load more users. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Search Form */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
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
      </div>

      {/* Results Section */}
      {isLoading && <p>Loading...</p>}
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        !isLoading &&
        users.length === 0 && <p>No users found based on the criteria.</p>
      )}
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
          disabled={isLoading}
          className={`${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          } text-gray-700 px-4 py-2 rounded mt-6`}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default Search;
