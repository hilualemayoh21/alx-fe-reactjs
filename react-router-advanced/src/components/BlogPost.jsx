// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Fetches the dynamic "id" parameter from the URL

  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* You can fetch and display the blog post content using the "id" */}
    </div>
  );
}

export default BlogPost;
