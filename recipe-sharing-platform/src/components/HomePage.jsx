import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making requests
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load the mock data from the data.json file
  useEffect(() => {
    axios
      .get("/src/data.json") // Path to your data.json file
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container mx-auto p-5">
      {/* Use Tailwind's responsive grid classes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
            {/* Link to the Recipe Detail Page */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
