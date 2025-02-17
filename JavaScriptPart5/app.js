// let students = {
//   name: "Aditya", 
//   age: 22,
//   marks: 80.4
// };

// const item = {
//   price: 100.99,
//   discount: 51,
//   colors: ["red", "pink"]
// };

// const post = {
//   username: "@shradhakhapra",
//   content: "This is my #firstPost",
//   likes: 150,
//   reposts: 5,
//   tags: ["@apnacollege", "@delta"]
// };

// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e"
// };

// const student = {
//   name: "shradha",
//   age: 23,
//   marks: 94.4,
//   city: "Delhi"
// };

// const classInfo = {
//   aman: {
//     grade: "A+",
//     city : "Delhi"
//   },

//   shradha : {
//     grade: "A",
//     city: "Pune"
//   }, 

//   karan: {
//     grade: "0",
//     city: "Pune"
//   }
// }

// const classInfo = [
//   {
//     name: "Aman",
//     grade: "A+",
//     city: "Delhi"
//   },
//   {
//     name: "Shradha",
//     grade: "A",
//     city: "Pune"
//   },
//   {
//     name: "Karan",
//     grade: "0",
//     city: "Pune"
//   }
// ];

// Guessing Game [1-maxi]
const maxi = prompt("Enter maximum number: ");

const rand = Math.floor(Math.random() * maxi) + 1;
console.log(rand);
while(true){
  let guessedNum = prompt("Guess the number: ");
  
  if(guessedNum == rand){
    console.log("Correct");
    break;
  }
 
  else if(guessedNum == "quit"){
    console.log("quitting...");
    break;
  }
  else{
    console.log(" Wrong! Try again...");

    
    while(true){
      let hintReq = prompt("Would you like to get hint? Enter 'yes' or 'no' ");
      hintReq = hintReq.toLowerCase();
      if(hintReq == "yes"){
        if(guessedNum < rand){
          console.log("hint: enter the bigger number.");
        }
        else{
          console.log("hint: enter smaller number");
        }
        break;
      }
      else if(hintReq == "no"){
        break;
      }
      else{
        console.log("Please enter correct answer i.e. 'yes' or 'no' ");
      }
    }
  }
}