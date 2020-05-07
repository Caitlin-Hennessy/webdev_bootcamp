var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var dogPicUrl = JSON.parse(xhr.responseText).message;
      console.log(dogPicUrl);
      var img = document.querySelector("#photo");
      img.src = dogPicUrl;
    }
  };
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
