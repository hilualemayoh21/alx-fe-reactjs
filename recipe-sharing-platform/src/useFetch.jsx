import useFetch from "./hooks/useFetch";

function HomePage() {
  const { data, error, isLoading } = useFetch("http://localhost:3000/recipes");

  if (error) return <h2>{error}</h2>;
  if (isLoading) return <h2>Loading ...</h2>;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((recipe) => (
        <Link key={recipe.id} to={`/recipedetails/${recipe.id}`}>
          <div className="shadow-md">
            <img
              src={recipe.image}
              alt={recipe.title}
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
