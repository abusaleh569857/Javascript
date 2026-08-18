const num = Math.floor(Math.random() * 100);

const result =
  num % 2 == 0
    ? num % 10 == 0
      ? "Divisible by 10 & Even"
      : "Simple Even"
    : num % 5 == 0
      ? "Divisible by 5 & Odd"
      : "Simple Odd";

console.log("Num is : ", num);
console.log("Result is : ", result);
