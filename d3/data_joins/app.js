var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13",
  },
  {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG",
  },
  {
    quote:
      "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R",
  },
  {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R",
  },
  {
    quote:
      "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G",
  },
];

d3.select("#quotes")
  .style("list-style", "none")
  .selectAll("li") //empty selection object
  .data(quotes)
  .enter() // creates nodes bound to quotes data
  .append("li")
  .text((d) => `${d.quote} - ${d.movie} (${d.year}`)
  .style("margin", "20px")
  .style("padding", "20px")
  .style("font-size", (d) => (d.quote.length < 25 ? "2em" : "1em"));

quotes.pop();

d3.selectAll("li").data(quotes).exit().remove();
//exit() returns data d3 thinks should be deleted

var nonRQuotes = quotes.filter((movie) => movie.rating !== "R");

d3.selectAll("li")
  .data(nonRQuotes, (d) => d.quote)
  .exit()
  .remove();
// 2nd parameter to data is "key function" that specifies how nodes and data are bound

add.on("click", () => {
  //button to add new quotes
  quotes = quotes.concat(newQuotes);

  d3.select("#quotes")
    .selectAll("li")
    .data(quotes)
    .enter()
    .append("li")
    .text((d) => d.quote)
    .style("margin", "20px"); //etc
});
