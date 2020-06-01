import React, { Component } from "react";

class Recipe extends Component {
  render() {
    //shorthand for title = this.props.title;
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((item, idx) => (
      <li key={idx}> {item} </li>
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title}></img>
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">Recipe {title}</h3>
          <h4>Ingredients:</h4>
          <ul>{ingredients}</ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map((r, idx) => (
          <Recipe key={idx} {...r} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
