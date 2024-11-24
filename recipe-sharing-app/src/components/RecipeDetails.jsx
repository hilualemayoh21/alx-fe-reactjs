// RecipeDetails.js
import { useRecipeStore } from "./recipeStore";
import { useParams, Link } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Use the `recipeId` param from the URL
  const recipe = useRecipeStore(
    (state) => state.recipes.find((r) => r.id === parseInt(recipeId)) // Find the recipe by ID
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
