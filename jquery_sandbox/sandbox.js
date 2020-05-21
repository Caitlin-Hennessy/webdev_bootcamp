async function getMostFollowers(...users) {
  var baseUrl = "https://api.github.com/users/";
  var promises = users.map((username) => $.getJSON(baseUrl + username));
  var results = await Promise.all(promises);
  return Math.max(...results.map((r) => r.followers));
  //   return Promise.all(promises)
  //     .then((results) => {
  //       return results.map((r) => r.followers);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return Math.max(...data);
  //     });
}

async function getStarWars(id) {
  var url = `https://swapi.dev/api/people/${id}/?callback=?`;
  var character = await $.getJSON(url);
  return character.name;
  //return $.getJSON(url).then((character) => character.name);
}

getMostFollowers("elie", "colt").then((results) => console.log(results));

// getStarWars(1).then((data) => {
//   console.log("pineapple");
//   console.log(data);
// });
