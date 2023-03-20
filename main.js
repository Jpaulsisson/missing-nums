////////Given an array from 1 to n, in no particular order////////
////////write a function to give the missing numbers between//////
////////1 and n, including 1 and n. //////////////////////////////


//////// first attempt ////////
function missingNums(arr) {
  arr.sort((a, b) => a - b);
  let counter = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (arr[i] !== counter) {
      answer.push(counter);
    }
  } return answer;
}

// console.log(missingNums([1, 1])); //[2]
// console.log(missingNums([1, 2, 4, 5, 5, 6, 6, 7])); //[3, 8, 9];

/////// second attempt ////////////
function missingStuff(arr) {
  let answer = [];
  for (let i = 1; i < arr.length + 1; i++) {          // solved.
    if (arr.indexOf(i) === -1) {
      answer.push(i);
    }
  } return answer;
}

console.log(missingStuff([1,1]))
console.log(missingStuff([1, 2, 4, 5, 5, 6, 6, 7]))