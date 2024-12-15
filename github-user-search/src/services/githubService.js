import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

const fetchUserData = async ({ userName, location, minRepos, page = 1 }) => {
  const query = [
    userName ? `in:login ${userName}` : "",
    location ? `location:${location}` : "",
    minRepos ? `repos:>=${minRepos}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=10&page=${page}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    console.log("API Response:", response.data); // Debugging
    return response.data.items;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default fetchUserData;
