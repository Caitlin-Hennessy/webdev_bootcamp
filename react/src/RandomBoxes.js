import React, { Component } from "react";
import "./RandomBoxes.css";
import { grid } from "./grid.js";

function getRandomColor(num) {
  const colorMap = {
    // blue
    0: [
      "#87BCDE",
      "#75C0EF",
      "#F4F4F4",
      "#C3E2F4",
      "#A9C4D6",
      "#AFC8D8",
      "#C3E2F4",
      "#A8D2ED",
      "#A8CAE0",
      "#95B2C4",
    ],
    // purple
    1: ["#711AC9", "#6409BF", "#553377", "#3B0670", "#7245A0"],
    // yellow
    2: ["yellow"],
    // green
    3: ["#1C8C4C", "#40A56C", "#06A84C", "#18BC5F", "#35EA84"],
  };

  var colors = colorMap[num];
  return colors[Math.floor(Math.random() * colors.length)];
}

const Box = (props) => (
  <div className="box" style={{ backgroundColor: props.color }}></div>
);

class BoxContainer extends Component {
  constructor(props) {
    super(props);

    var boxes = [];
    var ctr = 0;

    for (let row of grid) {
      for (let num of row) {
        boxes.push(<Box key={ctr++} color={getRandomColor(num)} />);
      }
    }
    this.state = {
      boxes,
    };
  }

  changeRandomBox() {
    var randomBoxIdx = Math.floor(Math.random() * this.state.boxes.length);
    var colorNum =
      grid[Math.floor(randomBoxIdx / grid.length)][randomBoxIdx % grid.length];
    var randomColor = getRandomColor(colorNum);
    const newBoxes = this.state.boxes.map((box, idx) => {
      return idx === randomBoxIdx ? <Box key={idx} color={randomColor} /> : box;
    });
    this.setState({ boxes: newBoxes });
  }

  componentDidMount() {
    setInterval(this.changeRandomBox.bind(this), 25);
  }

  render() {
    return <div className="box-container">{this.state.boxes}</div>;
  }
}

export default BoxContainer;
