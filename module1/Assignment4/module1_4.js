let num1 = prompt('Enter number1:');
let num2 = prompt('Enter number2:');
let num3 = prompt('Enter number3:');

let num1_int,num2_int,num3_int;
num1_int = parseInt(num1);
num2_int = parseInt(num2);
num3_int = parseInt(num3);

let sum = num1_int+num2_int+num3_int
let product = num1_int*num2_int*num3_int
let average = sum/3

document.write(`The sum is  ${sum}. The product is ${product}. The average is ${average}.`);