import React from "react";
import RecipeList from "./RecipeList";
import "./RecipeApp.css";

function RecipeApp() {
  return (
    <div className="App">
      <RecipeList
        // use default props here
        recipes={[
          {
            title: "pasta",
            ingredients: ["flour", "water"],
            instructions: "mix ingredients",
            img: "spaghetti.png",
          },
          {
            title: "avocado toast",
            ingredients: ["avocado", "toast"],
            instructions: "put avocado on toast",
            img: "spaghetti.png",
          },
          {
            title: "banana",
            ingredients: ["banana"],
            instructions: "do nothing",
            img: "spaghetti.png",
          },
        ]}
      />
    </div>
  );
}

export default RecipeApp;
