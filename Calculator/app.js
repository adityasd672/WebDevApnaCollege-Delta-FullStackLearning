var fvalue = document.getElementById("fvalue");
var svalue = document.getElementById("svalue");

let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".sub");
let multBtn = document.querySelector(".mult");
let divBtn = document.querySelector(".div");
let modBtn = document.querySelector(".mod");

addBtn.addEventListener('click',()=>{
  let result = fvalue.valueAsNumber + svalue.valueAsNumber;
  document.getElementById('result').innerHTML = result;
})
subBtn.addEventListener('click',()=>{
  let result = fvalue.valueAsNumber - svalue.valueAsNumber;
  document.getElementById('result').innerHTML = result;
})
multBtn.addEventListener('click',()=>{
  let result = fvalue.valueAsNumber  * svalue.valueAsNumber;
  document.getElementById('result').innerHTML = result;
})
divBtn.addEventListener('click',()=>{
  let result = fvalue.valueAsNumber / svalue.valueAsNumber;
  document.getElementById('result').innerHTML = result;
})
modBtn.addEventListener('click',()=>{
  let result = fvalue.valueAsNumber % svalue.valueAsNumber;
  document.getElementById('result').innerHTML = result;
})