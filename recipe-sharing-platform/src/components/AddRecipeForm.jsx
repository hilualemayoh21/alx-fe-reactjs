import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // Form validation
  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!title) {
      errors.title = "Title is required";
      isValid = false;
    }

    if (!ingredients) {
      errors.ingredients = "Ingredients are required";
      isValid = false;
    } else if (ingredients.split("\n").length < 2) {
      errors.ingredients = "Please list at least two ingredients";
      isValid = false;
    }

    if (!steps) {
      errors.steps = "Preparation steps are required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (validate()) {
      // Simulate successful submission
      setSuccess("Recipe added successfully!");
      setError("");
      setErrors({}); // Clear error messages

      // Reset the form
      setTitle("");
      setIngredients("");
      setSteps("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5 text-center">Add a New Recipe</h2>

      {/* Display Success or Error Messages */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-700"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-sm font-semibold text-gray-700"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="List ingredients"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-xs">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-sm font-semibold text-gray-700"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Write the preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-xs">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
