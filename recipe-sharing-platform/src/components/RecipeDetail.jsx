import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:5000/recipes/${id}`; // Replace with your API endpoint

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(url);
        setRecipe(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch recipe. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-xl mt-10 text-red-500">{error}</h2>;
  }

  if (!recipe) {
    return <h2 className="text-center text-xl mt-10">Recipe not found</h2>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-1">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <p className="text-gray-700 leading-6">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
