// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// code here

function sumOfPositive (arr) {
    let res = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        res += arr[i];
      }
    }
    return res;
  }

  module.exports = sumOfPositive