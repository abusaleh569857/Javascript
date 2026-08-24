
const arr = [
    {
        id:5,
        name:"Maruf",
        email: "abu@gmail.com"
    },
      {
        id:2,
        name:"Alam",
        email: "alam@gmail.com"
    },
      {
        id:9,
        name:"Khan",
        email: "khan@gmail.com"
    }
];
const arrCopy = [...arr];
console.log("Main Array : ", arr);
console.log("Copy Array : ", arrCopy);
arrCopy.sort((a,b) => {
   console.log("a-b",a,b)
   console.log("a - b : ", a.id - b.id)
   return(a.id - b.id)
})

console.log("Main Array : ", arr);
console.log("Copy Array : ", arrCopy);