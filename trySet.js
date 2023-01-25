const stdName= new Set();

stdName.add("chetan");
stdName.add("hitesh");
stdName.add("Varsha");
stdName.add("pooja");
stdName.add("reeta");
stdName.add("komal");
console.log(stdName);

const length = stdName.size;
console.log( `Size of set: ${length}`);
console.log(`=======after adding same element====`);

stdName.add("pooja");
console.log(stdName); ///set will not add duplicate value

const delete1= stdName.delete("komal suryawanshi")
// console.log(delete1);
console.log(`${delete1}`);  //it delete the value and show true value if value is not available then it show false

const isAvailabl1 = stdName.has("reeta"); //if available it give true or false value
console.log(isAvailabl1);

console.log(`Type of stdName set:${typeof stdName}`);  //typeof set is object

for (const element of stdName) {
    console.log(element);
    
}

const clearSet = stdName.clear();     //clear the set
console.log(stdName);

console.log(`=====removing duplicate element===========`);
const setArray = ["komal" ,"pooja" ,"amit" , "amit", "chetan", "varsha","hitesh","varsha","reeta"]
console.log(setArray)
 const setArrayUniuqe =[... new  Set(setArray)];
//  const setArrayUniuqe = new  Set(setArray);     //line no 38 and 39 will diplay same o/p
 console.log(setArrayUniuqe);

 