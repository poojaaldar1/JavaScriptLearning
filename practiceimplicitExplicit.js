let i="60";
 let j=7;
 let c;
 c=i-j;
 console.log(c);
 console.log(typeof c);

 let a=99;
 let b=true;
 let d=b-a;
 console.log(d);
 console.log(typeof d);


 let num="90";
 let num2=undefined;
 console.log(num+num2);
 console.log(typeof num+num2);

//  let n1="22";
//  let n2=21;
//  let add=Number(n1)+n2;
//  console.log(add);

 let no1=443;
 let no2=44;
 let addi=no1+no2.toString();   //convert num into string
 console.log(addi);

 let val1=undefined;    //if we perform operation with  number and undefine value result will be NaN
 let val2=7;
 let addition=val1+val2;
 console.log(addition);

 let n1="hitesh";
 let add=Number(n1);
 console.log("if variable declare a string and we try to comvert it into number it will diplay Nan:",add);

 let value1="76";
 console.log(value1,typeof value1);
let myNumber= + value1;
console.log( myNumber,typeof myNumber);
//  type of operator
//  1.unary
//  2.binary
//  3.ternary    condition ? true :false

 let val=32.88;
 let ad=parseInt(val);
 console.log(ad);