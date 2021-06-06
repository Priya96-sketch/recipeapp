import React from 'react';
import style from './recipe.module.css';
//passing on the props(PROPERTIES) - labels, calories, images 
//What er are doing? - Taking the Props and puttinh onto component
const Recipe = ({title, calories, img , ingredients}) => {
    return(
        //JSX Elements
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories = {calories}</p>
            <img src={img} alt=""/>
        </div>
    );
}

export default Recipe;