module.exports = function reverse (n) {

let str =  Math.abs(n).toString();
let strReverse = str.split('').reverse().join(''); 

return strReverse;


}




