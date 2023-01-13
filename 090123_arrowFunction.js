
console.log("******Arrow Function Assignment******");

console.log('\n');

console.log("1. Arrow Function With no argument & no return value");
let greet = ()=> {
    console.log("Good Morning,Today is Monday");
}
greet();

console.log("=====================================================================");
console.log("2. Arrow Function With 3 argument & no return value");
let myNumbers = (num1,num2,num3=1)=> {
    console.log(`Multiplication of Numbers : ${num1*num2*num3}`);
}
myNumbers(5,5,2);
myNumbers(10,4);

console.log("=====================================================================");
console.log("3. Arrow Function With 3 argument & no return value");
let myNumber = (num1,num2,num3,num4,num5)=> {
    let addition = num1+num2+num3+num4+num5;
    return addition
}
let addOfNumber =myNumber(100,100,200,349,756);
console.log(`Addition of Array is: ${addOfNumber}`);


let myNumb = (num1,num2,num3,num4,num5)=> {
    let additions = num1+" "+num2+" "+num3+" "+num4+" "+num5;
    return additions
}
let arrowFun =myNumb ("i am","learning","ES6","features","in depth")
console.log(`Addition of Array is: ${arrowFun}`);




