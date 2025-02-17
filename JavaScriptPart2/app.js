// console.log("Hello World!");
// console.log("ApnaCollege!");
// let a = 10;
// let b = 5;
// console.log("sum is :", a+b);

// let pencilPrice = 10;
// let eraserPrice = 4;
// console.log(`the total price is : ${pencilPrice + eraserPrice} rupees`); // template literals

// Conditional Statements
// console.log("before my if statement");
// let age = 23;
// if(age >= 23){
//   console.log("You can vote");
// }
// console.log("After my if statement");

// Practice Qs

// let color = "yellow";

// if(color === "red"){
//   console.log("Stop!");
// }

// else if(color === "yellow"){
//   console.log("Ready...");
// }

// else if(color === "green"){
//   console.log("Go!!!");
// }

// let age = 18;
// if(age>=18){
//   console.log("you cab wate");
// }
// else{
//   console.log("You cannot vote");
// }

// Practice Qs

// let size = 'XL';

// if(size == 'XL'){
//   console.log("Price is Rs.250");
// }
// else if(size == 'L'){
//   console.log("Price is Rs.200");
// }
// else if(size == 'M'){
//   console.log("Price is Rs.100");
// }
// else if(size == 'S'){
//   console.log("Price is Rs.50");
// }

// let str = "adig ";

// if(str.length > 3 && str[0] === 'a'){
//   console.log("Good String");
// }
// else{
//   console.log("Bad String");
// }

// let color="red";

// switch (color) {
//   case "red":
//     console.log("Stop!");
//     break;
//   case "yellow":
//     console.log("slow down");
//     break;
//   case "green":
//     console.log("Go!");
//     break;
  
  

//   default:
//     console.log("Broken traffic light!");
//     break;
// }

// PracticeQs

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");  
//     break;
//   case 2:
//     console.log("Tuesday");  
//     break;
//   case 3:
//     console.log("Wednesday");  
//     break;
//   case 4:
//     console.log("Thursday");  
//     break;
//   case 5:
//     console.log("Friday");  
//     break;
//   case 6:
//     console.log("Saturday");  
//     break;
//   case 7:
//     console.log("Sunday");  
//     break;

//   default:
//     console.log("Enter valid day number!");
//     break;
// }


// Alert and Prompt

// alert("something is wrong!");
// console.error("This is an error message");
// console.warn("Warning message");

// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name");

// let msg = "Welcome," + firstName + " "+ lastName+"!";
// alert(msg);

// Assignment Qs 

// Q1
// let num = 10;
// if(num%10 == 0){
//   console.log("good");
// }
// else{
//   console.log("bad");
// }

// Q2

// let name = prompt("Enter name: ");
// let age = prompt("Enter age: ");

// let str = `${name} is ${age} years old`;
// alert(str);

// Q3

// let quarter = 1;

// switch (quarter) {
//   case 1:
//     console.log("Months in Quarter 1: January, February, March");
//     break;
//   case 2:
//     console.log("Months in Quarter 2: April, May, June");
//     break;
//   case 3:
//     console.log("Months in Quarter 3: July, August, September");
//     break;
//   case 4:
//     console.log("Months in Quarter 4: October, November, December");
//     break;

//   default:
//     break;
// }

// Q4

// let str = "hditya";

// if((str[0] == 'a' || str[0] == 'A') && str.length>5){
//   console.log("Golden String");
// } else {
//   console.log("Not");
// }

// let num1 = 124;
// let num2 = 1000;
// let num3 = 10000;

// if(num1 > num2 && num1 > num3){
  
//     console.log("largest number is num1 = " + num1);
// }
// else if(num2 > num1 && num2 > num3){
//   console.log("largest num is num2 : " + num2);
// }
// else{
//   console.log("largest number is num3: " + num3);
// }

// Q6 (Bonus)

let num1 = 35;
let num2 = 69485;

if(num1%10 == num2%10){
  console.log("Same last digit : "+ num1%10);
}
else{
  console.log("Not same last digit");
} 