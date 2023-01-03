console.log(`--------------1.Class for Vahicles-----------------------`);
class Vehicle {
    constructor(brand,fuel,Wheeler,colour,speed){
this.brand =brand;
this.fuel=fuel;
this.Wheeler=Wheeler;
this.colour=colour;
this.speed=speed
    }
}
let maruti = new Vehicle( "Maruti","Petrol",4,"Black",160);
let tata =new Vehicle( "TATA","Disel",4,"white",160);
let bullet = new Vehicle( "Royal","Petrol",2,"Black",130);
let mahindra = new Vehicle( "mahindra","Petrol",4,"Black",110);

console.log(maruti);
console.log(tata);
console.log(bullet);
console.log(mahindra);

console.log(`--------------2.Class for College-----------------------`);
class College {
constructor(name,location,university,department){
this.name=name;
this.location=location;
this.university=university;
this.department=department;

}

}
var TKIET = new College("TKIET","Kolhapur","Shivaji",7);
var COEP = new College("COEP","Pune","Pune",5);
var KIT = new College("KIT","Kolhapur","Shivaji",5);
var VJTI = new College("VJTI","Mumbai","Mumbai",7);

console.log(TKIET);
console.log(COEP);
console.log(KIT);
console.log(VJTI);

console.log(`--------------3.Class for College-----------------------`);
function transverseObject(college) {
    for (const key in college) {
        if (Object.hasOwnProperty.call(college, key)) {
            const element = college[key];
            console.log(`${key}:${element}`);
            
        }
    }
}
console.log(`------TKIET------`);
transverseObject(TKIET)
console.log(`------COEP------`);
transverseObject(COEP)
console.log(`------KIT------`);
transverseObject(KIT)
console.log(`------VJTI-----`);
transverseObject(VJTI)