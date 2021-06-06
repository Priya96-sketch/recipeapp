import React, { useRef, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import source from "./recipes.json";

const App = () => {
  const query = useRef();
  const [recipes, setRecipes] = useState(source);

  const getRecipes = async (e) => {
    e.preventDefault();
    const searchTerm = query.current.value || "chicken";
    const data = source.filter((s) => s.recipe.label.includes(searchTerm));
    setRecipes(data);
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={getRecipes} className="search-form">
        <input className="search-bar" ref={query} type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          //What we are doing here? - Taking the states and putting it in the Props.
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
