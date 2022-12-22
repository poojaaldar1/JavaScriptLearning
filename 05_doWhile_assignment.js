console.log(`--------Using while looping--------`);

// Print numbers from 5 to 15 with inecementing 1
// initialization 5   condition <=15   update expre --
// 5  6 7
console.log(`----1.numbers from 5 to 15 with incrementing 1----`);
var i = 5;
while (i <= 15) {
  console.log(i);
  i++;
}

// Print numbers from 50 to 40 with drecementing 1
// initialization 50   condition >=40   update expre --
// 50  49 48
console.log(`----2.numbers from 50 to 40 with decrementing 1----`);
var i = 50;
while (i >= 40) {
  console.log(i);
  i--;
}
// Print numbers from 1 to 15
// initialization 1   condition <=15   update expre =i+2
// 1  3  5
console.log(`----3.first 15 odd number ----`);
var i = 1;
while (i <= 15) {
  console.log(i);
  i = i + 2;
}

console.log(`-------- Using do while looping--------`);

// Print numbers from 5 to 50
// initialization 2   condition <=10   update expre =i+2
// 2  4  8
console.log(`----4.first 10 even number ----`);
var i = 2;
do {
  console.log(i);
  i = i + 2;
} while (i <= 10);

// Print numbers from 5 to 50
// initialization 5   condition <=50   update expre =i+5
// 5  10  15
console.log(`----5.Table of 5 number ----`);
var i = 5;
do {
  console.log(i);
  i = i + 5;
} while (i <= 50);

// Print numbers from 10 to 100
// initialization 10   condition <=100   update expre =i+10
// 10  20  30
console.log(`----5.Table of 10 number ----`);
var i = 10;
do {
  console.log(i);
  i = i + 10;
} while (i <= 100);

// Print numbers from 100 to 10
// initialization 100   condition >=10   update expre =i-10
// 100  90  80
console.log(`----5.Table of 10 number ----`);
var i = 100;
do {
  console.log(i);
  i = i - 10;
} while (i >= 10);
