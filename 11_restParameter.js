function show(name, age, ...details){
    console.log(name,age, details);
}
show("Gaurav", 45, "Mumbai", 101);




// Function with default argument value
console.log("Function with default argument value");
function sum(n1, n2=0){
    console.log(n1, n2);
    console.log(n1+n2); // 30
}
sum(10, 20);
sum(10);



const person = {
    name: "Virat Kohli",
    age: 24,
    city: "Pune",
    pinCode: 431223,
    totalRun: 55000,
    isMarried: true
}

// let pinCodeVirat = person.pinCode;
// let totalRunVirat = person.totalRun;
// let cityVirat = person.city;
let { pinCode, totalRun,  city, isMarried, wifeName="Anushka"} = person; // Object Destructuring 

console.log(pinCode, totalRun, city, isMarried, wifeName );


console.log("Array Destructuring.....");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter", "Metaverse"];
let [ company1, company2, mad ] = arrayCompany; // Array Destructuring
console.log(company1,company2, mad);



console.log("Array Destructuring.....");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter"];
let [ company1, company2, company3, company4, company5="Microsoft" ] = arrayCompany; // Array Destructuring
console.log(company1,company2, company3, company4, company5);


// Self Invoking Function or IIFE - Immediately Invoked Function Expression
console.log("Self Invoking Function or IIFE - Immediately Invoked Function Expression");

(function show(){
    console.log("Bhar bhar ke likho");
})();


