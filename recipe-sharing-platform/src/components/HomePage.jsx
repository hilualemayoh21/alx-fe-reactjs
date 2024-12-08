import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:5000/recipes";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.recipes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error); //
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>loading</h2>;
  }
  if (error) {
    return <h2>error</h2>;
  }
  return (
    <div>
      {data.map((category) => (
        <div key={category.id}>
          <h3>{category.title}</h3>
          <p>{category.summary}</p>
          <img src={category.image}></img>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
