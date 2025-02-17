// const student = {
//   name: "shradha",
//   age: 23,
//   eng: 95, 
//   math: 23,
//   phy: 97,
//   getAvg(){
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//   }
// }

// try{
//   console.log(a);
// }catch(err){
//   console.log("variable doesn't exist..");
// }

// // Arrow Function

// const sum = (a,b) => (a+b);

// const cube = (n) => (n*n*n);


// const pow = (a, b) => {
//   return a ** b;
// };

// const hello = () => {
//   console.log("hello world");
// }

// const mul = (a,b) => (a*b);

// // set timeout

// console.log("hi there!");

// // setTimeout(() => {
// //   console.log("apna college");
// // }, 4000);

// // console.log("Welcome to!");

// let id = setInterval(() => {
//   console.log("Apna College");
// }, 2000) 

// this with Arrow functions

const student = {
  name: "aman",
  marks: 95, 
  prop: this, // global scope

  getName: function() {
    console.log(this); // this = student
    return this.name;
  },

  getMarks: () => {
    console.log(this); // parent's scope -> window
    return this.name;
  }, 

  getInfo1: function(){
    setTimeout(() => {
      console.log(this); // student
    },2000)
  },
  getInfo2: function(){
    setTimeout(function () {
      console.log(this); // window
    },2000)
  }
};

// Practice Qs

const square = n => (n*n);

// Q2.
let id = setInterval(() => {
  console.log("Hello World")
},2000);

setTimeout(()=>{
  clearInterval(id)
  console.log("clear Interval ran");
},10000);
