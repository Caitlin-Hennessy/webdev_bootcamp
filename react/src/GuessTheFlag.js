import React, { Component } from "react";

const FLAGS_URL = "https://restcountries.eu/rest/v2/all";
const ACTIVE = 0;
const WON = 1;
const LOST = 2;

//takeaways
//bias towards making small composable components instead of renderButton() etc
//click handlers should be named, e.g., onGuess instead of playAgain
//this.state.visibleCountries[this.state.correctAnswer].name is bad - figure out
//better way of storing data
//ok to check if fields of "this.state" are undefined in render() to determine if componentDidMount()
//AJAX calls have happened yet

class GuessTheFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      visibleCountries: [],
      selected: "",
      playingState: ACTIVE,
      correctAnswer: "",
    };
    this.playAgain = this.playAgain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFourStates() {
    //TODO?
    if (this.state.countries.length === 0) {
      return [];
    }
    var states = [];
    for (let _ = 0; _ < 4; ++_) {
      states.push(
        this.state.countries[
          Math.floor(Math.random() * this.state.countries.length)
        ]
      );
    }
    return states;
  }

  componentDidMount() {
    fetch(FLAGS_URL)
      .then((res) => res.json())
      .then((data) =>
        data.map((country) => {
          return { name: country.name, flag: country.flag };
        })
      )
      .then((countries) => this.setState({ countries }))
      .then(() => this.playAgain())
      .catch(console.warn);
  }

  handleChange(e) {
    this.setState({ selected: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var playingState;
    if (
      this.state.selected ===
      this.state.visibleCountries[this.state.correctAnswer].name
    ) {
      playingState = WON;
    } else {
      playingState = LOST;
    }
    this.setState({ playingState });
  }

  playAgain() {
    var visibleCountries = this.getFourStates();
    var correctAnswer = Math.floor(Math.random(4));
    this.setState({
      playingState: ACTIVE,
      visibleCountries: visibleCountries,
      correctAnswer: correctAnswer,
    });
  }

  renderButton(value) {
    return [
      <input
        type="radio"
        value={value}
        checked={this.state.selected === value}
        onChange={this.handleChange.bind(this)}
      ></input>,
      <label htmlFor={value}>{value}</label>,
    ];
  }

  render() {
    var [option1, option2, option3, option4] = this.state.visibleCountries.map(
      (v) => v.name
    );

    if (
      this.state.countries.length === 0 ||
      this.state.visibleCountries.length === 0
    ) {
      //component hasn't mounted yet
      return <div></div>;
    }
    const jsx = {
      0: (
        <form onSubmit={this.handleSubmit}>
          {this.renderButton(option1)}
          {this.renderButton(option2)}
          {this.renderButton(option3)}
          {this.renderButton(option4)}
          <input type="submit" value="Guess"></input>
        </form>
      ),
      1: (
        <h2>
          CORRECT!
          <button onClick={this.playAgain}>Play again</button>
        </h2>
      ),
      2: (
        <h2>
          WRONG! Correct answer was{" "}
          {this.state.visibleCountries[this.state.correctAnswer].name}
          <button onClick={this.playAgain}>Play again</button>
        </h2>
      ),
    }[this.state.playingState];

    return (
      <div>
        {jsx}
        <img
          width={300}
          src={this.state.visibleCountries[this.state.correctAnswer].flag}
          alt="a nice big flag"
        ></img>
      </div>
    );
  }
}

export default GuessTheFlag;
