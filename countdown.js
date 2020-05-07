function countDown(s) {
  var secondsElapsed = 1;
  var intervalId = setInterval(() => {
    console.log(s - secondsElapsed);
    ++secondsElapsed;
  }, 1000);
  setTimeout(() => {
    console.log("Ring Ring Ring!!!");
    clearInterval(intervalId);
  }, s * 1000);
}
