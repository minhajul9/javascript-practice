var num1 = 25;
var num2 = '15.5';
console.log(num1+num2);

var num3 = parseInt(num2);
console.log(num1+num3);

num3 = parseFloat(num2);
console.log(num1+num3);

var n1 = 0.1;
var n2 = 0.2;
var total = n1 + n2;
total = total.toFixed(2);
console.log(total);

// absolute value

var number = -69;
absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

// round number
var roundNumber = 5.99;
console.log(Math.round(roundNumber));
console.log(Math.ceil(roundNumber));
console.log(Math.floor(roundNumber));

r = Math.random(1,250);
console.log(r);

// Date
var  date = new Date();
console.log(date);