import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

// Initialize the QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Cache data remains fresh for 60 seconds
      cacheTime: 5 * 60 * 1000, // Cached data is kept for 5 minutes
      retry: 3, // Retry failed queries up to 3 times
      refetchOnWindowFocus: true, // Refetch on window focus
    },
  },
});

function App() {
  return (
    // Provide the QueryClient to the application
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
