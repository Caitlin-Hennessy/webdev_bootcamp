var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  console.log("state is " + xhr.readyState);
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log(xhr.responseText);
    } else {
      console.log("there was a problem");
    }
  }
};
xhr.open("GET", "https://api.github.com/zen");
xhr.send();
