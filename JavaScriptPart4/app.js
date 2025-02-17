
// let n = prompt("Enter your number") // string mein val aati hain

// n = parseInt(n);
// for (let index = n; index <= n*10; index += n) {
//   console.log(index);
// }

// Favourite Movie

// let favMovie = "AVATAR";  

// let guess = prompt("Guess favourite movie : ");


// while(guess.toUpperCase() != favMovie){
//   if(guess.toUpperCase == "QUIT") break;
//   console.log(`Wrong, ${guess} is not correct option, guess again or quit`);
//   guess = prompt("Guess favourite movie : ");
// }

// if(guess.toUpperCase() === favMovie){
//   console.log("Correct!!!");
// }
// else{
//   console.log("Ha, quitter!");
// }

// let fruits = ["mango ", "apple", "banana", "litchi", "orange"];

// for (let index = 0; index < fruits.length; index++) {
  
//   console.log(index, fruits[index]);
  
// }

// let heroes = [["ironman", "spiderman", "thor"],
//               ["superman", "wonderwoman", "flash"]]

// for (const list of heroes) {
//   for(hero of list){
//     console.log(hero);
//   }
// }

// for(char of "apnaCollege"){
//   console.log(char);
// }

let todo = [];

let req = prompt("Please enter your request.");

while(true){
  if(req == "quit"){
    console.log("quitting app");
    break;
  }

  if(req == "list"){
    console.log("---------");
    for(let i = 0; i<todo.length; i++){
      console.log(`${i+1}. ${todo[i]}`);
    }
    console.log("---------");
  }
  else if(req == "add"){
    let task  = prompt("please enter the task you want to add: ");
    todo.push(task);
    console.log("task added");
  }

  else if(req == "delete"){
    if(todo.length != 0){
      for(let i = 0; i<todo.length; i++){
        console.log(`${i+1}. ${todo[i]}`);
      }

      let index = prompt("Please enter the task index");
      todo.splice(index,1);
      console.log("Task deleted");
    }
    else{
      console.log("Empty list.");
    }
  }

  else{
    console.log("Please enter correct prompt...");
  }

  req = prompt("Please enter your request.");
}