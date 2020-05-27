var width = 600;
var height = 600;
var padding = 50;

// test test test test

var xScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, (d) => d.adultLiteracyRate))
  .range([padding, width - padding]); // BRACKETS ARE CRUCIAL

var yScale = d3
  .scaleLinear()
  .domain(d3.extent(regionData, (d) => d.subscribersPer100))
  .range([height - padding, padding]);

d3.select("svg")
  .attr("width", width)
  .attr("height", height)
  .selectAll("circle")
  .data(regionData)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d.adultLiteracyRate))
  .attr("cy", (d) => yScale(d.subscribersPer100))
  .attr("fill", "purple")
  .attr("r", 5);
