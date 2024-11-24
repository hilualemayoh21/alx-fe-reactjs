import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations when the component is mounted
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>
          No recommendations available! Add some favorites to see personalized
          suggestions.
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;
