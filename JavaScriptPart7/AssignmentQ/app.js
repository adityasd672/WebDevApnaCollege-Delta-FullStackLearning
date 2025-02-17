const arrayAverage = (arr) => {
  let sum = 0; 
  for(let num of arr){
    sum += num;
  }

  return sum/arr.length;
}

const isEven = (n) => {
  if(n%2 == 0){
    return true;
  } 
  else return false;
}

// Q3

const object = {
  message: "hello World!",
  
  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);