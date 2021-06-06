import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '1100766c';
  const APP_KEY = '3ae5ddcc76589272d7e636087e12ec05';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes(); //here getRecipes COPONENT is mounted
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
   // console.log(search);
  }

  const getSearch = e => {
    e.preventDefault(); 
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (

        //What we are doing here? - Taking the states and putting it in the Props.
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        img={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
        />
      ))};
      </div>
    </div>


  );
};

export default App;
