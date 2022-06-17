// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// code here

function removeChar (str) {
    let newStr = '';

    for(let i = 1; i < str.length - 1; i++) {
        newStr += str[i];
    }
    return newStr;
}

module.exports = removeChar