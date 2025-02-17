// // let arr = [1,2,3,4,5];

// // arr.forEach( (el) => {
// //   console.log(el);
// // }
// // );
// // let print = function (el){
// //   console.log(el);
// // }

// // arr.forEach(print);

// let students = [{
//   name: "aman",
//   marks: 95
// },{
//   name: "shradha",
//   marks: 94.36
// },{
//   name: "rajat dalal",
//   marks: 92
// }];

// // arr.forEach((student) =>{
// //   console.log(student.marks);
// // })

// // let num = [1,2,3,4];

// // let double = num.map((el)=>{
// //   return el*2;
// // });

// // let gpa = students.map((el)=>{
// //   return el.marks/10;
// // });

// let nums = [2,3,2,5,6,1,6,75,3,6,78,9,7,5];
// // let sum = nums.reduce((res,el) => (res + el));

// // let maxi = nums.reduce((max,el) =>{
// //   if(el > max){
// //     return el;
// //   }
// //   else{
// //     return max;
// //   }
// // })

// // Practice Qs
// // let ans = [10,20,40,60,50,60,70,30].every((el) =>(el%10 == 0));

// // let mini = nums.reduce((min, el) => {
// //   if(el<min){
// //     return el;
// //   }
// //   else{
// //     return min;
// //   }
// // })

// // function sum(a, b = 3){
// //   return a + b;
// // }

// // let val = sum(2);
// // console.log(val);

// console.log(...nums);
// let mini = Math.min(...nums);

// let newArr = [...nums];
// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// // let arr = [...odd, ...even];

// const data = {
//   email: "ironman@gmail.com",
//   password: "abcd"
// };

// const dataCopy = {...data, id : 135};

// let arr = [1,2,3,4,5];

// let obj1 = {...arr}; // obj -> key: val => key == index of arr
// // let obj2 = {..."hello"};

// function sum(...args){
//   for(let i = 0; i<args.length; i++){
//     console.log("you gave us: ", args[i]);
//   }  
// }

function sum(...args){
  return args.reduce((sum,el) => sum+el)
}

console.log(sum(1,3,5,3,5,3,6));

function min(...args){
  args.reduce((mini,el) =>{
    if(mini>el){
      return el;
    }
    else{
      return mini
    }
  })
}

let names = ["tony", "bruce","peter", "steve", "abc", 'xyz', "jdljfs"];

let [winner, runnerup, secondRunnerup, ...others] = names;

const student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english","math", "science"],
  username: "karan@123",
  password: "abcd"
};

let {username:user, password:pass, city:place = "Mumbai"} = student; 
