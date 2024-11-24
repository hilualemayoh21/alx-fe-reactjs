// EditRecipeForm.js
import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(recipeId))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: parseInt(recipeId), title, description });
    navigate(`/recipe/${recipeId}`); // Redirect to the recipe details page
  };

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
