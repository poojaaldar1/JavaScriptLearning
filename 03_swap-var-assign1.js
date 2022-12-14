
var sweety = "Sweety";
var cutie = " Cutie";
console.log(" 1. ====before swap====");
console.log(sweety, cutie);

console.log("====after swap====");
var temp = sweety;
sweety = cutie;
console.log(sweety, cutie);

console.log("====after swap using temp====");
sweety = temp;
console.log(sweety, cutie);


var num1=100;
var num2= 200;
var num3 =300;

console.log(" 2. ====before swap====");
console.log( num1 , num2, num3);

temp=num1
temp=num2
temp=num3

num1=num2
num2=num3
num3=num1
console.log(" 2. ====after swap====");
console.log(num1 , num2, num3 );


