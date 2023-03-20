import image from './cover.jpeg'
import { useEffect, useState } from 'react';
import './App.css';
import RecipesResult from './ResipesResult';

function App() {

  const MY_ID = "305ece7d";
  const MY_KEY = "500a4033180fbb1b92bddf9ed9f019b7";
  const[search, setSearch] = useState('');
  const[recipes, setRecipes] = useState([]);
  const [submit, setSubmit] = useState('chicken'); 

  useEffect(() =>{
    const getMyRecipe = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }
    getMyRecipe();
  },[submit])

  const searchedRecipes = (e) =>{
    setSearch(e.target.value)
  }
  const finalSubmit =(e)=>{
    e.preventDefault();
    setSubmit(search);
  }
  return (
    <div>
      <img className='image' src={image} alt="pic"/>
      <h1>CookBook</h1>
      <div>
        <form onSubmit={finalSubmit}>
          <input placeholder="Search..." className='input' onChange={searchedRecipes} value={search}>{}</input>
          <button>Search</button>
        </form>
      </div>
      {recipes.map ((element, index)=>(
        <RecipesResult key={index} name={element.recipe.label} picture={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
      ))}
    </div>
  );
}

export default App;
