console.log("----1. Square of Number----");
var square = function (num1) {
    var result = num1 * num1;
    console.log("Square Of",num1,"is", result);
}
var result = square(5);
var result = square(6)
var result = square(25)
var result = square(100);
console.log("--------------------------------------------------------------");

console.log("----2. type of function----");
console.log("type of function square is", typeof square);
console.log("--------------------------------------------------------------");


console.log("----3. Area of rectangle----");
var area = function (length, width) {
    area = length * width
    console.log("Area of rectangle is", area, "sq.m");
}
area(499, 917)
console.log("--------------------------------------------------------------");

console.log("----4. FE with swap value----");
var swapValue = function (value1,value2){
console.log("before Swap:",value1,value2);
temp=value1
value1=value2
console.log("After Swap:",value1,value2);
}
swapValue("virat","Anushka")
swapValue(1000,2000)
console.log("--------------------------------------------------------------");

console.log("----5. string:JS is the most popular language----");

var string =" JS the most popular language" ;
console.log("1.Total no of character is", string.length);
console.log("2.character at index 6 is", string.charAt(6));
console.log("3.character at index 6 is", string.charAt(11));
var totalLength= string.length
console.log("4.character at last", string.charAt(totalLength-1));

console.log("5.character at first", string.charAt(1));
