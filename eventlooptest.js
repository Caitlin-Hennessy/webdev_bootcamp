function square(n) {
  return n * n;
}

setTimeout(() => console.log("callback was placed on queue"), 0);

console.log(square(2));
