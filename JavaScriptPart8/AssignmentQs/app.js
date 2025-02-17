let arr = [1,2,3,4,5];

let sum = arr.reduce((sum,el) => (sum + (el*el)));
console.log("sum: ", sum);

console.log("avg: ", (sum/arr.length));

// Q2

// let newArr = arr.map((el) => {
//   return el+5;
// });


// Q3

let strArr = ["hello", "world", "python"];

let newArr = strArr.map((str) =>{
  return str.toUpperCase();
})

const doubleAndReturnArgs = (arr, ...args) =>[
  ...arr,
  ...args.map((v)=>v*2)
];

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

