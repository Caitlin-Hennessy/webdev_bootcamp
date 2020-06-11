import React, { Component } from "react";
import "./TicTacToe.css";

const Square = (props) => (
  <button className="square" onClick={props.handleClick}>
    {props.content}
  </button>
);

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(""),
      xIsNext: true,
      gameOver: false,
    };
  }
  checkIfGameOver(squares) {
    const winningConfigs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let config of winningConfigs) {
      const [a, b, c] = config;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return true;
      }
    }
    return false;
  }
  handleClick(i) {
    if (this.state.gameOver) {
      return;
    }
    const squares = this.state.squares.map((sq, idx) =>
      idx === i ? (this.state.xIsNext ? "X" : "O") : sq
    );
    const gameOver = this.checkIfGameOver(squares);
    this.setState({ squares, gameOver, xIsNext: !this.state.xIsNext });
  }
  render() {
    const squares = this.state.squares.map((sq, i) => (
      // don't have to do this.handleClick.bind(this, i)
      <Square key={i} content={sq} handleClick={() => this.handleClick(i)} />
    ));
    return [
      this.state.gameOver ? <div>GAME OVER!</div> : "",
      <div className="board">{squares}</div>,
    ];
  }
}

export default TicTacToe;
