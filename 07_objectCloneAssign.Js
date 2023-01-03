console.log(`--------Clonning Assignment--------`);
const arrayNums = [20,3,4,56,90,400,49];
console.log(`Given Array is:`);
console.log(arrayNums);



console.log(`1.Shallow Cloning using with = oprator, updating with array values 55,66`);
arrayNumber=arrayNums
let arrayPush= arrayNumber.push(55,66);
console.log(arrayNums);

console.log(`2.Deep Cloning, updating with array values 10,25`);

myArray=[...arrayNums]
console.log(myArray);
var newA = myArray.push[10,25]
console.log(newA); 




// // Deep Cloning
// console.log("Array Deep Cloning");
// let arrayOfNumber = [0, 2, 4, 6, 8 ];
// let arrayClone =  [... arrayOfEvenNum]; // Deep Clone
// arrayOfNumber[2] = 100;
// arrayClone[2] = 200;
// console.log(arrayOfNumber);
// console.log(arrayClone);
