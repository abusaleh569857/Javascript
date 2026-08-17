console.log("Started!");

setTimeout(() => {
  console.log("I am in under set timeout!");
}, 2000);

console.log("Printing...");

Promise.resolve().then(() => console.log("Promise resolved!"));

console.log("Printing 2.....");

let promise = Promise.resolve("Promise 2 resolved successfully!");

promise.then((promise) => console.log(promise));

setTimeout(() => {
  console.log("I am in under set timeout 2!");
}, 2000);

Promise.resolve("Successfull!").then((res) => console.log(res));

setTimeout(() => {
  console.log("I am in under set timeout 3!");
}, 2000);

console.log("ending....");