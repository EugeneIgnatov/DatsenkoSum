function sum(num1 = 0, num2 = 0) {
  num1 = parseInt(num1) || 0;
  num2 = parseInt(num2) || 0;
  if (Array.isArray(num1) || typeof num1 === 'object') {
    num1 = 0;
  } else if (Array.isArray(num2) || typeof num2 === 'object') {
    num2 = 0;
  }
  return  num1 + num2;
}
//some test for lst
module.exports = sum;
