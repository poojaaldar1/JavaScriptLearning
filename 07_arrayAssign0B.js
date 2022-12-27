console.log(`***********************Assignment 02:Array********************* `);

console.log(
  `--------------1. Total Length of Array Element--------------------`
);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var length = arrayNumbers.length;
console.log(`1.Total length of number: ${length}`);

console.log(`--------------2. First & Last element of array---------------`);

console.log(`Element at 0 index : ${arrayNumbers[0]}`);
console.log(`Element at 0 index : ${arrayNumbers[length - 1]}`);

console.log(`--------------3. First & Last element of array---------------`);
console.log(`Element at third last index : ${arrayNumbers[length - 3]}`);

console.log(`--------------4. All even numbers in array---------------`);



console.log(`--------------5. All odd numbers in array---------------`);




console.log(`------------6.Accessing only even indexed values--------------`);
for (let index = 0; index < arrayNumbers.length; index = index + 2) {
  if (index%2 !=0) {
    let element = arrayNumbers[index];
    console.log(element);
  }
}

// console.log(`------------7.Accessing only odd indexed values--------------`);
// for (let index = 0; index < arrayNumbers.length; index = index + 2) {
//   if (index%2 !=0) {
//     let element = arrayNumbers[index];
//     console.log(element);
//   }
// }
// // 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11;
// console.log(`------------7.Accessing only odd indexed values--------------`);
// for (let index = 0; index < arrayNumbers.length; index = index + 2) {
//   let element = arrayNumbers[index];
//   console.log(element);
// }


console.log(`------------8.Sum of all elements--------------`);
let sumOfNum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumOfNum = sumOfNum+element;
}
console.log(`Total Salary of all employee is : ${sumOfNum}`);



console.log(`------------9.Multiple of 5--------------`);




console.log(`------------10.Is number 115 available --------------`);
let isAvailable =arrayNumbers.includes(115);
console.log(`Is number 115 available: ${isAvailable}`);


console.log(`------------11.Is number 23 available --------------`);
let present =arrayNumbers.includes(23);
console.log(`Is number 115 available: ${present}`);


console.log(`------------12.Insert number 55,66 before index 3 --------------`);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arrayNumber.splice(3, 0, 55,66);
console.log(arrayNumber);


console.log(`------------13.Deleted 3 elements starting from index 4-------------`);


