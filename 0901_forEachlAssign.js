const arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given Array Is : ${arrayNumber}`);

console.log("1.Array element with its index value using forEach loop");
arrayNumber.forEach(function (currentValue, index) {
console.log(    `Array With its Value is : ${currentValue}, & that index is :${index}`);
});

console.log("----------------------------------------------------------------------------------------------");

 console.log("2.Positive elements from the given array using forEach loop with arrow function");
 const positiveNum =[];
 arrayNumber.forEach((currentValue) => {
  if (currentValue>=0) {
    positiveNum.push(currentValue)
}
  });
  console.log(positiveNum);

  console.log("----------------------------------------------------------------------------------------------");

  console.log("3.Negative elements from the given array using forEach loop with arrow function");
  const negativeNum =[];
  arrayNumber.forEach((currentValue) => {
   if (currentValue<=0) {
    negativeNum.push(currentValue)
 }
   });
   console.log(negativeNum);


console.log("----------------------------------------------------------------------------------------------");
console.log("4.Even elements from the given array using forEach loop with arrow function");
const evenElements =[];
 arrayNumber.forEach((currentValue) => {
 if (currentValue%2==0) {
    evenElements.push(currentValue)
}
 });
 console.log(evenElements);


 console.log("----------------------------------------------------------------------------------------------");
 console.log("5.Sum of all elements using with arrow function");
//  console.log(arrayNumber);
 let sum=0;
  arrayNumber.forEach((currentValue) => {
    sum+=currentValue;
        
 });
 console.log(sum);

 console.log("----------------------------------------------------------------------------------------------");
 console.log("6.Even index from thre given array using forEach loop with arrow function");
 console.log(arrayNumber);
 const arrayOfEven =[];
  arrayNumber.forEach((currentValue,index) => {
  if (index%2==0) {
    arrayOfEven.push(currentValue)
    }
  });
  console.log(arrayOfEven);


