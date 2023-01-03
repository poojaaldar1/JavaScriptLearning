
const personalDetails ={
name: "Pooja Aldar",
age: 25,
gender:"Female",
Height:5.4,
Mail:"poojaaldar@gmail.com"
}

const collgeDetails ={
   name :"TKIET Warana",
    Branch : "Civil Engineering",
    Passout : 2018,
    Grade : "A",
    location : "Kolhapur"

}
console.log(`-------------1.Personal Details object Of Pooja-------------`);
console.log(personalDetails);

console.log(`-------------2.College Details object Of Pooja-------------`);
console.log(collgeDetails);

console.log(`-------------3.Merging two objects Of Pooja-------------`);
let merge = Object.assign(personalDetails, collgeDetails)
console.log( merge);

console.log(`-------------4.freezing array-------------`);
const frnds =["Komal","Varsha","Hitesh","Chetan","Amit","Sonal"];
// console.log(frnds);
var frzng= Object.freeze(frnds);
console.log(frzng);

console.log(`-------------5.Iterate Array-------------`);
for (const iterator of object) {
    
}

console.log(`-------------6.Reverse word-------------`);
let company = "Codemind Technology"
let revStr=""
let afterSplit = company.split(" ")
 for (let index = 0; index < afterSplit.length; index++) {
    const element = afterSplit[index];
 if(index==1){
    for (let index = element.length; index >= 0; index--) {
    revStr = revStr+" "+element.charAt(index)
    }
  }
}
let result = afterSplit[0]+" "+revStr
 console.log(`   a.Before reverse: ${company}`);
 console.log(`   b.After reverse:  ${result}`);