console.log("************ Ternery Assignment 01 *************");


console.log("-------1. Find the greatest number --------");

var gretest = function (val1,val2){
 var result= val1>val2 ? "Greater" :"Not Greater";
    console.log(`The value ${val1} is ${result} than value ${val2}.`);
}
var result = gretest (10,-10);
var result = gretest (800,899);
console.log("___________________________________________________________");

console.log("-------2. Checking Even or odd numbers --------");

var isEvenOrOdd = function (val) {
      var result = val%2==0 ? "Even" : "Odd";
   console.log(`The value  ${val} is ${ result}.`);
}
var result = isEvenOrOdd(29);
var result = isEvenOrOdd(44);
var result = isEvenOrOdd(0);
var result = isEvenOrOdd(101);

console.log("___________________________________________________________");

console.log("-------3. Checking words is Even or odd  --------");

var result= function (words){
    var length = words.length;
var wordLength = length%2==0 ? "Even" : "Odd";
console.log(`${words} word length is ${wordLength}.`);
}
var wordLength= result ("1. JavaScript");
var wordLength= result("2. Developer");
var wordLength= result("3. Google");