import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import("../data.json");
        const recipeDetail = data.recipes.find(
          (recipe) => recipe.id === parseInt(id)
        );
        if (!recipeDetail) throw new Error("Recipe not found");
        setRecipe(recipeDetail);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-xl mt-10 text-red-500">{error}</h2>;
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
