import React from 'react';
import Recipes from './recipe.module.css';
const Recipe = (props)=>{

    return (
        <div className={Recipes.recipe}>

            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient=>
                    <li>{ingredient.text}</li>
                    )}

            </ol>
            <p>{props.calories}</p>
            <img className={Recipes.image} src={props.image} alt="" />
        </div>
    )

}

export default Recipe;