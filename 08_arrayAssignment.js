

class bank {

constructor( bankName,location,accountNo,ifsc,intrestrate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.pinCode=ifsc;
this.intrestrate=intrestrate

    }
}
const axis_bank =new bank("AxisBank","Mumbai",11111111111,122410410,"3%");
const sbi_bank =new bank("SBIBank","Sangola",222222222,133411411,"4%");
const icici_bank =new bank("ICICI Bank","Pune",3333333333,144412412,"5%");
const kotak_bank =new bank("KotakBank","Kolhapur",444444444,155413413,"6%");
const hdfc_bank =new bank("HDFCBank","Sangli",5555555555,166414414,"7%");
const punjab_bank =new bank("PunjabBank","solapur",666666666,177415415,"8%");

console.log(`------A. Cretaing Objects for Bank details-------`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);

console.log('\n');//new line space

const arrayOfBank = [axis_bank , sbi_bank , icici_bank , kotak_bank , hdfc_bank , punjab_bank]
console.log(`------StepC.traversing array using for of loop -BankName & location------`);
for (const bankDet of arrayOfBank) {
    console.log(`Bank Name is: ${bankDet.bankName} , Bank Location is : ${bankDet.location}`);
}

console.log('\n');//new line space

console.log(`------StepD.Finding the kotak bank using for of loop------`);
for (const banks of arrayOfBank) {
    if (banks.bankName=="KotakBank") {
        console.log(banks); 
    }
    
}

console.log('\n');//new line space

console.log(`------StepE.log all details on console------`);
for (const bankDet of arrayOfBank) {
    console.log(bankDet);
}






