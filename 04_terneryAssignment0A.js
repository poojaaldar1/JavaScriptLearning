console.log("-------1.Boy marriage eligibility --------");
function maleMarriageEligibily(gender,age,boyName){

var result= male=gender && age>=21 ? "eligible for marriage" : "not eligible for marriage";
console.log(`Hey ${boyName}, you are ${result}.`);

}
maleMarriageEligibily ("Male",25,"Billgates");
maleMarriageEligibily ("Male",17,"Stew Jobs");
console.log("--------------------------------------------------");
console.log("-------2.Girl marriage eligibility --------");
function femaleMarriageEligibily(gender,age,girlName){

    var result= female=gender && age>=21 ? `Hey ${girlName} eligible for marriage` : "not eligible for marriage";
    console.log(`${girlName},you are ${result}.`);
    
    }
    femaleMarriageEligibily ("feMale",16,"Jenifer");
    femaleMarriageEligibily ("feMale",27,"Stew Jobs");