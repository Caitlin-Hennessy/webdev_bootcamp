d3.select("#new-note").on("submit", function () {
  d3.event.preventDefault();
  var input = d3.select("input");
  d3.select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
});

d3.select("#new-note").on("oninput", function () {
  d3.event.preventDefault();
  d3.select("#notes")
    .append("p")
    .classed("note", true)
    .classed("preview", true)
    .text(input.property("value"));
});

d3.select("#clear-notes").on("click", function () {
  d3.event.preventDefault();
  d3.select("#notes").html("");
});

d3.select("#lucky").on("click", function () {
  d3.event.preventDefault();
  var random = Math.random();
  var color = random > 0.5 ? "pink" : "purple";
  d3.selectAll(".note").style("background-color", color);
});
