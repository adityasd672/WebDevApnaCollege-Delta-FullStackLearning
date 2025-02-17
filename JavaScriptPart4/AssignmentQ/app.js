// Q1

// let arr = [1,2,3,4,5,6,2,3];
// let num = prompt("Enter a number: ");
// num = parseInt(num);

// let start = 0; 
// let i = 0; 

// while(i<= arr.length){
//   if(arr[i] == num){
//     arr.splice(i,1);
//     start = i;
//   }
//   ++i;
// }


// Q2

// let number = 1234556;

// let count = 0; 

// while(number != 0){
//   number = Math.floor(number/10);
//   // console.log(number);
//   ++count;
// }

// console.log(count);

// Q3
// let number = 1234556;

// let sum = 0; 

// while(number != 0){
//   let ones = Math.floor(number%10);
//   number = Math.floor(number/10);
//   // console.log(number);
//   sum += ones;
// }

// console.log(sum);

// Q4
// let num = prompt("Enter the number : ");
// num = parseInt(num);
// let i = num;
// let fact = 1;

// while(i>0){
//   fact *= i;
//   --i;
// }

// console.log(fact);

// Q 4

let arr = [1,3,5,3,2,3,5,2,,8,95,85,43,745,34,6,3];

let maxi = 0;

for(num of arr){
  if(num > maxi){
    maxi = num;
  }
}

console.log(maxi);
