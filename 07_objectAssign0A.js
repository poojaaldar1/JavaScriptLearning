const professor = {
  name: "Mr.Rakesh Sharma",
  age: 45,
  Mobile: 8620031112,
  Gender: "Male",
  city: "Mumbai",
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computiong",
    MTECH: "Computer",
    add: function () {
      return this.engineering + ", " + this.PHD + " ," + this.MTECH;
    },
  },
  certificate: {
    certi1: "Hacker Rank Participation",
    certi2: "Certificate in IFE course",
    certi3: "Certificate in Adv Programmimg.",
  },
};
console.log(`1.Details of the Professor`);
console.log(professor);
console.log(`Type of professor object is : ${typeof professor}`);
console.log(`-------------------------------------------------------------------------------`);

console.log(`2.Degrees of the Professor`);
console.log(professor.degrees);
console.log(`-------------------------------------------------------------------------------`);

console.log(`3.Certificates of the Professor`);
console.log(professor.certificate);
console.log(`-------------------------------------------------------------------------------`);

console.log(`4.Degrees of the Professor`);
console.log(professor.degrees);
console.log(professor.degrees.add());
console.log(`-------------------------------------------------------------------------------`);

console.log(`5.Add new property:`);
professor.height = 5.6;
console.log(`Height of the Professor is : ${professor.height}`);
console.log(`-------------------------------------------------------------------------------`);

console.log(`6.Modifying the value of age property :`);
professor.age = 30;
console.log(professor.age);
console.log(`-------------------------------------------------------------------------------`);

console.log(`7.Deleted cert1 from nested object:`);
delete professor.certificate.certi1
console.log(professor.certificate);
console.log(`-------------------------------------------------------------------------------`);

console.log(`8.Added new cert4 in nested object:`);
professor.certificate.certi4 = "Certificate in Programmimg";
console.log(`New cerrtificate is : ${professor.certificate.certi4}`);
console.log(`-------------------------------------------------------------------------------`);

console.log(`9.Log the nested object 'Certificatye'`);
console.log(professor.certificate);
console.log(`-------------------------------------------------------------------------------`);


