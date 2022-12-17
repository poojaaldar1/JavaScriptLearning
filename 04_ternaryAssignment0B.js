console.log("************ Ternery Operator Assignment 0B *************");


console.log("-------Ternery Operator with using FE--------");
var eligibilityCeriteria = function (gradScore,hscScore,sscScore,name){

var result = gradScore>=70 | hscScore>=80 | sscScore>90 ? "Congrats you are Eligible" : "Unfortunately you are Not Eligible";

console.log(`Eligible Criteria For Intervies:  ${name} ${result} for TCS interview.`);

}
var result = eligibilityCeriteria (80,86,90,"Pooja");
var result = eligibilityCeriteria (70,65,55,"Pranoti");
var result = eligibilityCeriteria (60,79,88,"Sanchita");