import React from 'react';

const recipes = (props) => (
  <div className="container" >
    <div className="row">
      {props.recipes.map((recipe) => {
        return (
          <div className="col-md-4" key={recipe.title} style={{ marginBottom: '2rem'}}>
            <div className="recipes__box">
              <img 
                src={recipe.image_url}
                alt={recipe.title}
                className="recipe__box-img"
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                  {recipe.title.length < 20 ? recipe.title : `${recipe.title.substring(0, 15)}...` }
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">View Recipe</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default recipes;