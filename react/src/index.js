import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import RecipeApp from "./RecipeApp";
// import RandomBoxes from "./RandomBoxes";
// import TodoApp from "./TodoApp";
//import MemoryGame from "./MemoryGame";
import GuessTheFlag from "./GuessTheFlag";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <GuessTheFlag />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
