function callbackFoo() {
  var counter = 0;
  setTimeout(function () {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function () {
      counter++;
      console.log("Line 6: counter =", counter);
      setTimeout(function () {
        counter++;
        console.log("Line 9: counter =", counter);
      }, 3000);
    }, 2000);
  }, 1000);
}

var pineapple = 0;
function promiseFooDoesntWork() {
  var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      pineapple++;
      console.log("pineapple:", pineapple);
    }, 1000);
    resolve();
  });

  p.then(function (counter) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        pineapple++;
        console.log("pineapple:", pineapple);
      }, 1000);
      resolve();
    });
  }).then(function () {
    console.log("done");
  });
}

var counter = 0;
function incCounter() {
  counter++;
  console.log("Counter:", counter);
}

function runLater(callback, timeInMs) {
  var p = new Promise(function (kumquat, reject) {
    setTimeout(function () {
      var res = callback();
      kumquat(res);
    }, timeInMs);
  });
  return p;
}

function promiseFoo() {
  runLater(incCounter, 1000)
    .then(function () {
      return runLater(incCounter, 1000);
    })
    .then(function () {
      return runLater(incCounter, 1000);
    })
    .then(function () {
      console.log("done");
    });
}

// callbackFoo();

// promiseFooDoesntWork();

// promiseFoo();

var x = new Promise((a, b) => {
  a(123);
});

x.then((res) => console.log(res));
