console.log(` ====== 1. Voting eligibility criteria ======= `);


var votingEligibliity = function (age){
if (age>=18 && age<=120) {
    console.log(`Age is ${age},your are eligible for voting`);
}
if (age<18 && age>0) {
    console.log(`Age is ${age},your are not eligible for voting`);
}
if (age <= 0 || age>120 ) {
    console.log(`Given age is ${age},invalid data for voting`);
}
}

votingEligibliity(47);
votingEligibliity(17);
votingEligibliity(8);
votingEligibliity(20);
votingEligibliity(-10);
votingEligibliity(200);
votingEligibliity(0);
console.log(` \n `);
console.log(` ====== 1. Grade system design ======= `);
function gradeCaculation(marks){

if (marks>=90 && marks<=100) {
    console.log(`Fantastics marks : ${marks},Your grade is A+.`);
}
if (marks>=75 && 90>marks) {
    console.log(`Excellent marks : ${marks},Your grade is A.`);
}
if (marks>=50 && marks<75 ) {
    console.log(`Good marks : ${marks},Your grade is B.`);
}
if (marks>=35 && marks<50) {
    console.log(`Good marks : ${marks},Your grade is C,Need improvement.`);
}
if (marks<0 || marks>100) {
    console.log(`Given marks id ${marks},Please provide valid data.`);
}

}
gradeCaculation(98);
gradeCaculation(80);
gradeCaculation(90);
gradeCaculation(150);
gradeCaculation(-7);
gradeCaculation(35);
gradeCaculation(29);
gradeCaculation(64);
gradeCaculation(49);



// or

// var votingEligibility = function(age){
//     if(age<=0 || age>120 ){
//         console.log(`Age value : ${age}, Invalid data`);
//     }
//     if(age>=18 && age<=120) {
//         console.log(`your age is : ${age}, You can vote`);
//     }
//     if(age<18 && age>0){
//         console.log(`your age is : ${age}, You can note vote`);
//     }
// }
// votingEligibility(20);
// votingEligibility(89);
// votingEligibility(1500);
// votingEligibility(0);


// function gradeCalculation(marks){
//     if(marks<=0 || marks>100){
//         console.log(`Please provide th valid data`);

//     }
//     if(marks>=90 && marks<=100){
//        console.log(); 
//     }
//     if(marks>=75 && marks<90){
//         console.log("A"); 
//      }
// }



