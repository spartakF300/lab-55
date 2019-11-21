import React from 'react';
import cheeseImage from '../../images/Cheese.png'
import saladImage from '../../images/Salad.png'
import baconImage from '../../images/Bacon.png'
import meatImage from '../../images/Meat.png'
import './Ingrediets.css'

export const Ingredients = [

        {name: 'Meat', price: 50, image: meatImage},
        {name: 'Cheese', price: 20, image: cheeseImage},
        {name: 'Salad', price: 5, image: saladImage},
        {name: 'Bacon', price: 30, image: baconImage}

        ];

const Ingredient = (props) => {
    return (
        <div>
           <div className={'ingredients'}>
               <button className={'btn-icons'} onClick={props.addIngredient}>
                   <img src={Ingredients[props.index].image} alt={props.name}/>
               </button>
               <span>{props.name}</span>
               <span> {'X' + props.count} </span>
               <button className={props.count ? 'btn-remove':'hide'} onClick={props.removeIngredient}>
                   <i className="fas fa-trash-alt"></i>
               </button>
           </div>
        </div>
    );
};

export default Ingredient;