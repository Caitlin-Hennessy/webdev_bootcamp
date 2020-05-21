d3.select("form").on("submit", () => {
  d3.event.preventDefault();
  var input = d3.select("input");
  var phrase = input.property("value");

  var letterCounts = {};
  for (let ch of phrase) {
    if (letterCounts[ch] == undefined) {
      letterCounts[ch] = 1;
    } else {
      letterCounts[ch] += 1;
    }
  }

  var letterCountsArr = [];
  for (let letter of Object.keys(letterCounts)) {
    let count = letterCounts[letter];
    letterCountsArr.push({ letter, count });
  }

  d3.select("#letters")
    .selectAll("div")
    .data(letterCountsArr)
    .enter()
    .append("div")
    .classed("letter", true)
    .style("width", "20px")
    .style("height", (o) => o.count * 20 + "px")
    .text((o) => o.letter);
});

d3.select("#reset").on("click", () => {
  d3.select("input").property("value", "");
  d3.selectAll(".letter").remove();
});

/*
UPDATE
var letters = d3.select("#letters")
.selectAll(".letter")
.data(letterCountsArr, d => d.letter) //key function is important here

letters.classed("new", false).exit().remove()

letters.enter()
.append("div").classed("letter", true).classed("new", true) //rest of styles here
*/
