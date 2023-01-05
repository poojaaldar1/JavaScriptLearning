console.log(`--------Clonning Assignment--------`);
const arrayNums = [20,3,4,56,90,400,49];
console.log(`Given Array is:`);
console.log(arrayNums);
console.log(`Clonned Array is:`);
arrayNumber=arrayNums
console.log(arrayNumber);
console.log(`----------------------------------------------------------------------------------`);
console.log(`1.Shallow Cloning using with = oprator, updating with array values 55,66`);
arrayNumber=arrayNums
console.log(arrayNumber);
console.log(`Array after updating values is:`);
let arrayPush= arrayNumber.push(55,66);
console.log(arrayNums);

console.log(`----------------------------------------------------------------------------------`);
console.log(`2.Deep Cloning, using 'spread oprator' updating with array values 10,25`);
myArray=[...arrayNums]
console.log(myArray);
console.log(`Array after updating values is:`);
var newA =  myArray.push(10,25)
console.log(myArray); 

console.log(`----------------------------------------------------------------------------------`);
console.log(`3.marging two araay with using spread oprator`);
arrayEven =[2,30,14,8]
console.log(arrayEven);
console.log(`Array after merging is:`);
const mergingArray = [...arrayNums,...arrayEven]
console.log(mergingArray);

console.log(`----------------------------------------------------------------------------------`);

console.log(`4.Created employee object`);
const employee_info = {
    emp_id : 27,
    emp_name :"John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month: "50,0000INR",
        jun_month : "65,0000inr"
    },
    address :{
        locality :{
            colony :"OM Vrindavan Sociert",
            street : "Kanch Pokli,431202"
                    },
                    city: "Mumbai",
                    state:"Maharashtra",
                    country: "India"
    },
    mobile :["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]

}


console.log(`5.Log the emplyee details`);
 // var empLocality=employee_info.address.locality
console.log(employee_info.address.locality,employee_info.address.city,employee_info.address.state,employee_info.address.country);

console.log(employee_info.mobile);


console.log(`6.Deep Clonning using JSON.stringfy()`);
let empPooja = JSON.parse(JSON.stringify(employee_info));
console.log(empPooja);


var poojaSal= empPooja.salary.july_month ="80,000 INR";
console.log(`a.Updated Salary Of Month July is :${poojaSal}`);

var countryOrigin= employee_info.address.country ="United Kingdom";
console.log(`a.Updated country in original object:${countryOrigin}`);

var countryOrigin= employee_info.address.country ="United Kingdom";
console.log(`a.Updated country in original object:${countryOrigin}`);

console.log(`c.log original & cloned object `);
// var countryOrigin= employee_info.address.country ="United Kingdom";
console.log(employee_info);
console.log(empPooja);


