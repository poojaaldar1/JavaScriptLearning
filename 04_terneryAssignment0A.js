
function maleMarriageEligibily(gender,age,boyname){

var result= male=gender && age>=21 ? "eligible for marriage" : "not eligible for marriage";
console.log(`Hey ${boyname}, you are ${result}.`);

}
maleMarriageEligibily ("Male",25,"Billgates");
maleMarriageEligibily ("Male",17,"Stew Jobs");


