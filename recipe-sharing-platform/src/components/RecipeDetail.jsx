import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function RecipeDetail() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/recipes/${params.id}`
        );
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
  }, [params.id]);
  if (error) {
    return <h2>{error}</h2>; // Ensure the error condition returns JSX.
  }

  if (isLoading) {
    return <h2>Loading ...</h2>; // Ensure the loading state also returns JSX.
  }
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} />
      <p>{data.summary}</p>
    </div>
  );
}

export default RecipeDetail;
