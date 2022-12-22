console.log(`.......1.Voting eligibility criteria.......`);

var votingeligiblity = function (age) {
  if ((age <= 0) & (age < 120)) {
    console.log(`Your age is ${age},Please enter valid data.`);
  } else {
    // console.log(`valid data`);
  }
  if (age >= 18 && age < 120) {
    console.log(`Your age is ${age} are eligible for Vote.`);
  } else {
    // console.log(`Invalid data`);
  }
};
votingeligiblity(45);
votingeligiblity(17);
votingeligiblity(8);
votingeligiblity(20);
votingeligiblity(-10);
votingeligiblity(200);
votingeligiblity(0);

console.log("\n");

console.log(`.......1.Marks with Grades system.......`);

var gradeCalculation = function (marks){
  // (marks == 0 || marks < 0 || marks > 100 || typeof marks != "number"   OR)

if (marks==0 || marks>100 || typeof marks!="number") {
  console.log(`Your marks is ${marks}, Please enter valid Data`);
  
} else {
  if (marks>90 && marks<=100) {
    console.log(`Funtastic Marks :${marks} "your grade is A+"`);
  }
else{
  if (marks>=75 && marks<90) {
    console.log(`Excellent marks: ${marks} "your grade is A"`);
  } else {
    if (marks>=50 && marks<75) {
      console.log(`Good marks: ${marks} "your grade is B"`);
    } else {
      if (marks>=35 && marks<50) {
        console.log(`Marks is: ${marks} "your grade is C, Need Improvment"`);
      } else {
        
      }
      
    }
  }
}
}


}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("eighty");


console.log(`---------------------------------------------------------------------------------------------------`);
 
var marriageEligibilty = function (gender , age){

  if (male<21 & female<18) {
      console.log(`Gender:${gender} & Age:${age}, Sorry your not eligible for marriage.`);
  } else {
      if (male>21||female>18) {
        console.log(`Gender:${gender} & Age:${age}, Sorry your not eligible for marriage.`);
      }
      if (male) {
        
      }
  }

}
marriageEligibilty ("male", 17);
marriageEligibilty ("male", 17);
marriageEligibilty ("male", 17);
marriageEligibilty ("male", 17);
marriageEligibilty ("male", 17);
marriageEligibilty ("male", 17);