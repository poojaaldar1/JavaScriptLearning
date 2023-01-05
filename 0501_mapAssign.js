
console.log(`------A. Cretaing class 'Bank' With properties & intilized using constructor-------`);
  class bank {

    constructor( bankName,location,accountNo,ifsc,intrestrate){
    this.bankName=bankName;
    this.location=location;
    this.accountNo=accountNo;
    this.pinCode=ifsc;
    this.intrestrate=intrestrate
    
        }
    }
    console.log(`------B. Creating Objects of class 'Bank'&logged on console-------`);
    const axis_bank =new bank("AxisBank","Mumbai",11111111111,122410410,"3%");
    const sbi_bank =new bank("SBIBank","Sangola",222222222,133411411,"4%");
    const icici_bank =new bank("ICICI Bank","Pune",3333333333,144412412,"5%");
    const kotak_bank =new bank("KotakBank","Kolhapur",444444444,155413413,"6%");
    const hdfc_bank =new bank("HDFCBank","Sangli",5555555555,166414414,"7%");
    const punjab_bank =new bank("PunjabBank","solapur",666666666,177415415,"8%");

        
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);

console.log(`------C. Creating map which has key as account No & value as object-------`);
const mapOfBanks = new Map();
mapOfBanks.set(11111111111,axis_bank);
mapOfBanks.set(222222222,sbi_bank);
mapOfBanks.set(3333333333,icici_bank);
mapOfBanks.set(444444444,kotak_bank);
mapOfBanks.set(5555555555,hdfc_bank);
mapOfBanks.set(666666666,punjab_bank);


const keymapOfBanks= mapOfBanks.keys();
console.log(keymapOfBanks);

console.log(`------D. Traversing the map using for_Of loop n logged on console-------`);
for (const key of keymapOfBanks) {
    const banker = mapOfBanks.get(key);
    console.log(`Bank name is: ${banker.bankName},Account No is :${banker.accountNo},Intrest rate is : ${banker.intrestrate}`);
}


// const keyOfMapEmployee = mapOfEmployees.keys();
// console.log(keyOfMapEmployee);
// for (const key of keyOfMapEmployee) {
//     const employee = mapOfEmployees.get(key);
//     console.log(employee.empName, employee.empCity);
// }
