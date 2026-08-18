const user = [
  {
    id: 1,
    name: "Maruf",
    email: "abusaleh.cse.uiu@gmail.com",
  },
  {
    id: 2,
    name: "Mahim",
    email: "mahim@gmail.com",
  },
];

//const userCopy = [...user]; // shallow copy
const userCopy = structuredClone(user);
console.log(user.length);
console.log(userCopy.length);

userCopy.push({
  id: 3,
  name: "Alam",
  email: "alam@gmail.com",
});

console.log(user.length);
console.log(userCopy.length);

console.log(user);
console.log(userCopy);


userCopy[0].email = "abu@gmail.com"

console.log(user);
console.log(userCopy);

