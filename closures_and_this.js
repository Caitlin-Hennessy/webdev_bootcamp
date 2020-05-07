function guessingGame(numGuesses) {
  //numGuesses = max number of guesses
  //num = target number between 1 and 10
  var num = Math.floor(Math.random() * 11);
  return function game(guess) {
    if (numGuesses === 0) {
      return "You are all done playing!";
    } else if (numGuesses == 1) {
      return "No more guesses the answer was " + num.toString();
    } else if (guess == num) {
      numGuesses = 0;
      return "You got it!";
    } else if (guess < num) {
      numGuesses -= 1;
      return "You're too low!";
    } else {
      numGuesses -= 1;
      return "You're too high!";
    }
  };
}

// solution
function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 11);
  var guesses = 0;
  var completed = false;
  return function (guess) {
    if (!completed) {
      guesses++;
      if (guess === answer) {
        completed = true;
        return "You got it!";
      } else if (guesses === amount) {
        completed = true;
        return "No more guesses the answer was " + answer;
      } else if (guess > answer) return "Your guess is too high!";
      else if (guess < answer) return "Your guess is too low!";
    }
    return "You are all done playing!";
  };
}

function add(a, b) {
  return a + b;
}

function invokeMax(fn, num) {
  var counter = 0;
  return function inner() {
    if (counter >= num) {
      return "Maxed Out!";
    } else {
      counter++;
      // arguments is object not array but this works
      return fn.apply(this, arguments);
    }
  };
}

var addOnlyThreeTimes = invokeMax(add, 3);

console.log(addOnlyThreeTimes(1, 2)); // 3
console.log(addOnlyThreeTimes(2, 2)); // 4
console.log(addOnlyThreeTimes(1, 2)); // 3
console.log(addOnlyThreeTimes(1, 2)); // "Maxed Out!"

/* CONSTRUCTORS AND PROTOTYPES */

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.family = [];
}

Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

Person.prototype.addToFamily = function (person) {
  if (person instanceof Person && this.family.indexOf(person) == -1) {
    return this.family.push(person);
  }
};

Array.prototype.map = function (callback) {
  var newArr = [];
  for (var i = 0; i < this.length; ++i) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

String.prototype.reverse = function () {
  var newStr = "";
  for (var i = this.length - 1; i >= 0; --i) {
    newStr += this[i];
  }
  return newStr;
};
