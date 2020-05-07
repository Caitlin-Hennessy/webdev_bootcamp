var url = "https://randomuser.me/api/";

var btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function printError(err) {
  console.log("ERROR: " + err);
}

function handleErrors(res) {
  if (!res.ok) {
    throw Error(404);
  }
  return res;
}

function parseJSON(res) {
  return res.json();
}

function updateProfile(res) {
  var user = res.results[0];

  document.querySelector("#avatar").src = user.picture.medium;
  document.querySelector("#fullname").innerHTML =
    user.name.first + " " + user.name.last;
  document.querySelector("#email").innerHTML = user.email;
  document.querySelector("#city").innerHTML = user.location.city;
  document.querySelector("#username").innerHTML = user.login.username;
}
