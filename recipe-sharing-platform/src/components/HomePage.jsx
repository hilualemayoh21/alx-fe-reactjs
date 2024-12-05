import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipes");
        if (!response.ok) {
          throw new Error("HTTP request error");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchRecipe();
  }, []);

  if (error) {
    return <h2>{error}</h2>; // Ensure the error condition returns JSX.
  }

  if (isLoading) {
    return <h2>Loading ...</h2>; // Ensure the loading state also returns JSX.
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((recipe) => (
        <Link key={recipe.id} to={`/recipedetails/${recipe.id}`}>
          <div className="shadow-md">
            <img
              src={recipe.image}
              alt=""
              className="w-full object-contain md:hover:scale-105"
            />
            <h2 className="font-bold text-lg mx-auto">{recipe.title}</h2>
            <p className="p-4">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
