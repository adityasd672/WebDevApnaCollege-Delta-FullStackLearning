let nInput = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
document.querySelector('body').append(nInput);
document.querySelector('body').append(btn);

nInput.placeholder = "username";
btn.id = "btn";

btn.style.backgroundColor = "blue";
btn.style.color = "white";

let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";

document.querySelector('body').prepend(h1);
h1.style.textDecoration = "underline";
h1.style.color = "purple";

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(para);