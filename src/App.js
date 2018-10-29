import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = '5bea2e86977e42ced540a80eb3e9779b';


class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (event) => {
    event.preventDefault();
    // const recipeName = event.elmeents.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&page=5`);
    
    const data = await api_call.json();
    console.log(data.recipes[0]);
  }

  

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Search</h1>
          </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
      
    );
  }
}

export default App;

