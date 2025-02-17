let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("#todo");
let done = document.querySelector("#done");

btn.addEventListener("click",function(){
  if(input.value == ""){
    alert("Please enter task to add.");
  }
  else{
    let item = document.createElement("li");
    item.innerText = input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
  } 
});

ul.addEventListener("click", function(event){
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    let taskDone = document.createElement("li");
    taskDone.innerText = listItem.childNodes[0].data;
    // console.dir(listItem);
    done.appendChild(taskDone);
    listItem.remove();
    console.log("deleted");
  }else{
    console.log("do nothing");
  }
});

  

