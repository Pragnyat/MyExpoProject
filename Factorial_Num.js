//Factorial of a Number
var num = 6;
var fact = 1;
for (i = 1; i <= num; i++) {
    fact *= i;
}
console.log(`The factorial of ${num} = ${fact}.`);