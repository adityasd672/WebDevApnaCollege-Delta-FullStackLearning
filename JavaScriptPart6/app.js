// function hello(){
//   console.log("hello");
// }

// function printNam(){
//   console.log("apna college");
// }

// function print1To5(){
//   for(let i = 1; i<=5; i++){
//     console.log(i);
//   }
// }

// Practice Qs 2

// function rollDice(){
//   let num = Math.floor(Math.random() * 6) + 1;
//   console.log(num);
// }

function printInfo(name,age){
  console.log(`${name}'s age is ${age}.`);
}

printInfo("shraddha");
 
// Practice Qs 3
function avg(num1, num2, num3){
  console.log((num1+num2+num3)/3);
}

// Practice Qs 4
function table(num){
  for(let i = 1; i<=10; i++){
    console.log(`${num} X ${i} = ${num*i}`);
  }
}

// Practice Qs 5

function sumOfnums(num){
  let sum = 0;

  for(let i = 1; i<=num; i++){
    sum += i;
  }

  return sum;
}

// Practice Qs 6

let str = ["hi", "hello", "bye", "!"];

function concat(str){
  let result = "";

  for(let i = 0; i<str.length; i++){
    result += str[i];
  }

  return result;
}

function outerFunc(){
  let x = 5;
  let y = 6;

  function innerFunct(){
    console.log(x);
  }

  innerFunct
}

let sum = function(a,b){
  return a+b;
}

// Higher order functions

let greet = function(){
  console.log("greet");
}

function multipleGreet(func, count){
  for(let i = 1; i<= count; i++){
    func();
  }
}

// multipleGreet(greet, 1000);

let odd = function(n){
  console.log(!(n%2 == 0));
}

let even = function(n){
  console.log(n%2 == 0);
}


function oddOrEvenFactory(request){
  if(request == "odd"){
    return function(n){
      console.log(!(n%2 == 0));
    }

    // return odd;
  }
  else if(request == "even"){
    return function(n){
      console.log(n%2 == 0);
    }

    // return even;
  }
  else{
    console.log("wrong request");
  }
}

let request = "odd";

const calculator = {
  add(a,b){
    return a+b;
  },
  sub(a,b){
    return a-b;
  },
  mul(a,b){
    return a*b;
  }
}
