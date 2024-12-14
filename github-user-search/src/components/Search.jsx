import React, { useState } from "react";
import fetchUserData from "../services/githubService";
function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleUserSearch = async () => {
    try {
      setIsLoading(true);
      setError("");
      setUser(null);
      const data = await fetchUserData(userName.trim());
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setError("Looks like we cant find the user");
      console.error("canot fetch the user data", error);
      setUser(null);
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <h3>loading ...</h3>;
  }
  return (
    <div>
      <div className=" text-center m-10">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className=" w-60 bg-slate-50 outline-none rounded-lg p-2"
        />
        <button
          onClick={handleUserSearch}
          className=" ml-4 bg-slate-700  rounded-sm px-4"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red">{error}</p>}
      {user && (
        <div className="mt-40   mb-30 flex flex-col gap-3 justify-center items-center max-w-xl sm:max-w-md mx-auto bg-white shadow-lg shadow-gray-500/50 rounded-lg p-4border border-gray-300">
          <img
            src={user.avatar_url}
            alt={`${user.login} avater's`}
            className="rounded-full w-10 h-10 my-3 block"
          />
          <h2>{user.name || "No user Name"}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-slate-600 mb-4 no-underline block"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
