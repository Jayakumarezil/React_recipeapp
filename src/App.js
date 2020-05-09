import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe'



const App = ()=>{

  const App_Id = "28a10e9c";
const App_key ="3fc9e22f595f482e9e13fff0a76742f3";
const App_link = `https://api.edamam.com/search?q=chicken&app_id=${App_Id}&app_key=${App_key}`

const [recipes,setrecipes] = useState([]);
// const [recipess,setrecipess] = useState(0);
const [search,setsearch] = useState('');
const [query,setquery] = useState('chicken');

useEffect(()=>{
  console.log("its is called everytime")
  fetch_api();
},[query])

const search_food =(e)=>{
const ev = e.target.value;
setsearch(ev)
}

const search_recipe = e =>{
  e.preventDefault();
  setquery(search)

}

 const fetch_api = async ()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_key}`);
  const data = await response.json();
  console.log(data.hits)
  setrecipes(data.hits)

}
  return (
    <div className="App">
      <form  onSubmit={search_recipe} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={search_food}/>
        <button className="search-button" type="submit">Search</button>
      </form>
  {/* <h1 onClick={()=>setrecipess(recipess + 1) }>{recipess}</h1> */}
<div className="recipe">
  {recipes.map((recipe)=>
  <Recipe  key={recipe.recipe.label}  title ={recipe.recipe.label} 
  calories ={recipe.recipe.calories} image={recipe.recipe.image}
  ingredients = {recipe.recipe.ingredients} />
  )}
  </div>
    </div>
  )
}

export default App;
