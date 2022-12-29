var fruits_seasonal = ["banana", "Orange", "Apple", "Mango", "Water melon"];
var length = fruits_seasonal.length;
console.log(`Total no of elements in array: ${length}`);
console.log(`1.1.First element of array: ${fruits_seasonal[0]}`);
console.log(`1.2.Last element of array: ${fruits_seasonal[length - 1]}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(`2.Adding element at starting of array:${fruits_seasonal}`);
console.log(`-----------------------------------------------------------------------------`);

var  fruits_seasonal = ["banana", "Orange", "Apple", "Mango", "Water melon"];
console.log(fruits_seasonal);
var del = fruits_seasonal.splice(3,1)
console.log(`3.Remove the element mango from the array: ${fruits_seasonal}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(`4.Insert the elementPineapple in array at last: ${fruits_seasonal}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(fruits_seasonal);
 var delDragr = fruits_seasonal.splice(3,0,"Dragon Fruit")
 console.log(`5.Insert element dragon fruit before water meleon in the array: ${fruits_seasonal}`);
 console.log(`-----------------------------------------------------------------------------`);

 console.log(fruits_seasonal);
 var replace = fruits_seasonal.splice(1,1,"kiwi")
console.log(`6.Replace orange with kiwi: ${fruits_seasonal}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(fruits_seasonal);
var printbet = fruits_seasonal.slice(1,4)
console.log(`7.Print index 1 to 4: ${printbet}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(fruits_seasonal);
var printbet = fruits_seasonal.slice(3)
console.log(`8.Print last 3 elemnt: ${printbet}`);