import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
  state = {
    activeRecipe: this.props.location.state.recipe
  }
 
  render() {
    return (

      <div className="container">
        <div className="active-recipe">
          <img className="active-recipe__img" src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.title}/>
          <h3 className="active-recipe__title">{this.state.activeRecipe.title}</h3>
          <h4 className="active-recipe__publisher" >
            Publisher: <span>{this.state.activeRecipe.publisher}</span>
          </h4>
        </div>
        <p className="active-recipe__website">
          Website: <span><a href={this.state.activeRecipe.source_url}>{this.state.activeRecipe.source_url}</a></span>
        </p>
        <button className="active-recipe__button">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    );
  }
}

export default Recipe;