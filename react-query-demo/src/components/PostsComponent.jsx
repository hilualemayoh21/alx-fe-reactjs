import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  // Use the useQuery hook with React Query options
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch, // Function to manually trigger a refetch
  } = useQuery("posts", fetchPosts, {
    staleTime: 60 * 1000, // Data stays fresh for 1 minute
    cacheTime: 5 * 60 * 1000, // Cache stays in memory for 5 minutes
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Retain old data while fetching new data
  });

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {isFetching && <div>Updating...</div>}
      {/* Button to manually refetch data */}
      <button onClick={() => refetch()}>Refetch Posts</button>
    </div>
  );
}

export default PostsComponent;
