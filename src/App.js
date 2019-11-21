import React, {Component} from 'react';
import './App.css'
import Burger from "./component/Burger/Burger";
import Ingredient,{Ingredients} from "./component/Ingredients/Ingredients";

class App extends Component {
    state = {
        ingredients: [
            {name: 'Meat', count: 0},
            {name: 'Cheese', count: 0},
            {name: 'Salad', count: 0},
            {name: 'Bacon', count: 0}
        ],
        total:0,
    };
    addIngredient =(index)=>{
       const ingredients = [...this.state.ingredients];
       ingredients[index].count++;
     let  total= this.state.total;
     total+= Ingredients[index].price;
        this.setState({ingredients, total})

    };
    removeIngredient = (index)=>{
        const ingredients = [...this.state.ingredients];
        ingredients[index].count--;
        let  total= this.state.total;
        total-= Ingredients[index].price;
        this.setState({ingredients, total})

    };

    render() {
        return (
            <div className={'app-container'}>

                <div className={'ingredient-wrapper'}>
                    <h2 className={'ing-p'}>Ingredients</h2>
                {this.state.ingredients.map((item , index)=>
                    <Ingredient
                        name={item.name}
                        count={item.count}
                        key={index}
                        index={index}
                        addIngredient={()=>this.addIngredient(index)}
                        removeIngredient={()=>this.removeIngredient(index)}
                    />
                )}


                </div>

                <div >
                    <h2 className={'burg-p'}>Burger</h2>
                    <Burger
                        counter={this.state.ingredients}
                        total={this.state.total}

                    />
                </div>
            </div>
        );
    }
}

export default App;