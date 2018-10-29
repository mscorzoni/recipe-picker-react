import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '5bea2e86977e42ced540a80eb3e9779b';


class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (event) => {
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);
    
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;

