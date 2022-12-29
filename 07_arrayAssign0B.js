console.log(`***********************Assignment 02:Array********************* `);

console.log(
  `--------------1. Total Length of Array Element--------------------`
);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Array=${arrayNumbers}`);
var length = arrayNumbers.length;
console.log(`1.Total length of number: ${length}`);

console.log(`--------------2. First & Last element of array---------------`);

console.log(`Element at 0 index : ${arrayNumbers[0]}`);
console.log(`Element at 0 index : ${arrayNumbers[length - 1]}`);

console.log(`--------------3. First & Last element of array---------------`);
console.log(`Element at third last index : ${arrayNumbers[length - 3]}`);

console.log(`--------------4. All even numbers in array---------------`);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var evenCount=""
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index]%2==0) {
  var evenCount= evenCount+" "+arrayNumber[index]
  }
  }
console.log(`all even numbers in the array:${evenCount}`);

console.log(`--------------5. All odd numbers in array---------------`);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var evenCount=""
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index]%2!=0) {
  var evenCount= evenCount+" "+arrayNumber[index]
  }
  }
console.log(`all odd numbers in the array:${evenCount}`);

console.log(`------------6.Accessing only even indexed values--------------`);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumber);
var evenInd =" "
for (let index = 0; index < arrayNumber.length; index = index + 2) {
  if (index%2==0) {
    var evenInd = evenInd + ","+arrayNumber[index];
      }
}
console.log(`Accessing even index elements ${evenInd}`);

console.log(`------------7.Accessing only odd indexed values--------------`);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumber);
var evenInd =" "
for (let index = 0; index < arrayNumber.length; index++) {
  if (index%2!=0) {
    evenInd = evenInd+" "+arrayNumber[index]
  }
  }
console.log(`Accessing odd index elements ${evenInd}`);


console.log(`------------8.Sum of all elements--------------`);
let sumOfNum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumOfNum = sumOfNum+element;
}
console.log(`Total Salary of all employee is : ${sumOfNum}`);


console.log(`------------9.Multiple of 5--------------`);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
multiArray=" "
for (let index = 0; index < arrayNumber.length; index++) {
 if (arrayNumber[index]%5==0) {
multiArray= multiArray+" "+arrayNumber[index]
   }
  }
console.log(multiArray );


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
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumber);
let arryNum = arrayNumber.splice(4,3)     //--4 is index,3 total deleted numbers
console.log(`Removing three element from index 4 to 7: ${arrayNumber}`);


