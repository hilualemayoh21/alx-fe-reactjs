import axios from "axios";

// Base URL for GitHub Search API
const BASE_URL = "https://api.github.com/search/users";

// Fetch GitHub user data with advanced search criteria
const fetchAdvancedUserData = async ({
  userName,
  location,
  minRepos,
  page = 1,
}) => {
  // Construct the query
  const query = [
    userName && `in:login ${userName}`,
    location && `location:${location}`,
    minRepos && `repos:>=${minRepos}`,
  ]
    .filter(Boolean)
    .join(" ");

  const url = `${BASE_URL}?q=${encodeURIComponent(
    query
  )}&per_page=10&page=${page}`;

  console.log("Fetching with URL:", url); // Log the constructed URL

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`, // Access Vite environment variable
      },
    });

    console.log("API Response:", response.data); // Log API response for debugging
    return response.data.items; // Return the users array
  } catch (error) {
    console.error(
      "Error fetching user data:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default fetchAdvancedUserData;
