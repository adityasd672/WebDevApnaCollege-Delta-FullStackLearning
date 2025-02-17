// let box = document.querySelector("div");

// // box.addEventListener("mouseout",function(){
// //   console.log("Mouse got out of the box");
// // })

// let inp = document.querySelector('input');

// inp.addEventListener("keypress", function(){
//   console.log(this.value);
//   console.log("char pressed");
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//   console.log("button clicked!");
//   btn.style.backgroundColor = "green";
// })

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("keydown", function(event){
  if((event.key >= "a" && event.key <= "z") || (event.key >= "A" && event.key<="Z") || event.key == " "){
    h2.innerText = inp.value;
  }
  console.log(event);
});