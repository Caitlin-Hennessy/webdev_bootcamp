import React, { Component } from "react";
import "./MemoryGame.css";

const NUM_SQUARES = 16;
const SHOWING = 1;
const HIDING = 2;
const MATCHING = 3;

const singleColors = [
  "#F0F8FF",
  "#00FFFF",
  "#9932CC",
  "#FF1493",
  "#008000",
  "#7CFC00",
  "#7B68EE",
  "#FF4500",
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getShuffledColors() {
  return shuffle([...singleColors, ...singleColors]);
}

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.visibility === HIDING ? "#ccc" : props.color,
      }}
      onClick={props.onClick}
    />
  );
};

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    const shuffledColors = getShuffledColors();
    const cards = [];
    for (let i = 0; i < NUM_SQUARES; ++i) {
      cards[i] = { color: shuffledColors[i], visibility: HIDING };
    }
    this.state = { cards, showing: undefined };
  }

  handleClick(i) {
    console.log(`${i} clicked`);
    let newCards = this.state.cards.map((o) => ({ ...o }));
    if (this.state.showing === undefined) {
      console.log("case 1");
      newCards[i].visibility = SHOWING;
      this.setState({ showing: i, cards: newCards }, () =>
        console.log(this.state.showing)
      );
    } else if (
      this.state.cards[this.state.showing].color === this.state.cards[i].color
    ) {
      console.log("pineapple");
      newCards[this.state.showing].visibility = MATCHING;
      newCards[i].visibility = MATCHING;
      this.setState({ showing: undefined, cards: newCards });
    } else {
      console.log("here");
      newCards[i].visibility = SHOWING;
      this.setState({ cards: newCards });
      setTimeout(() => {
        newCards[this.state.showing].visibility = HIDING;
        newCards[i].visibility = HIDING;
        this.setState({ showing: undefined, cards: newCards });
      }, 250);
    }
  }
  render() {
    let cardElements = [];
    for (let i = 0; i < NUM_SQUARES; ++i) {
      cardElements.push(
        <Card
          onClick={this.handleClick.bind(this, i)}
          key={i}
          color={this.state.cards[i].color}
          visibility={this.state.cards[i].visibility}
        />
      );
    }
    let gameOver = this.state.cards.every(
      (card) => card.visibility === MATCHING
    );
    return [
      <div>Super fun game</div>,
      <div className="cards-container">{cardElements}</div>,
      gameOver ? <div>YOU WIN!</div> : undefined,
    ];
  }
}

export default MemoryGame;
