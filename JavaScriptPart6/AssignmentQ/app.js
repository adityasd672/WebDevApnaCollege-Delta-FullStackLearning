function largerArr(num, arr) {
  let ansArr = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > num){
      ansArr.push(arr[i]);
    }
  }

  return ansArr;
}

let arr = [2,5,36,2,6,1,78,4,7,1];


function uniqueChar(str){
  let array = new Array(26).fill(false);

  let ans = "";

  for(let char of str){
    let index = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    if(array[index] == false){
      array[index] = true;
    }
  }

  for(let i = 0; i<26; i++){
    if(array[i] == true){
      ans += String.fromCharCode(i + 'a'.charCodeAt(0));
    }
  }

  return ans;
}

function longestCountryName(country){
  let max = 0; 
  let ans = "";
  for(let str of country){
    if(str.length > max){
      ans = str;
      max = str.length;
    } 
  }

  return ans;
}

function countVowels(str){
  let count = 0; 

  for(let char of str){
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
      ++count;
    }
  }

  return count;
}

function randomNum(start, end){
  return (Math.floor(Math.random() * (end-start + 1)) + start);
}

