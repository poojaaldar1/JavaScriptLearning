const codemindMembers={
    member1:"pooja",
    member2:"Varsha",
    member3:"hitesh",
    member4:"amit",
    member5:"chetan",
    member6:"komalk",
    member7:"reeta",
     surname:                                 //nested object
     {
       surname1:"aldar",
       surname2:"shelake",
       surname3:"ghadge",
     
      age:function(a,b){                 //nested object as a  function
        console.log("age of member");
        const c=a+b;
        return c;
        // console.log(c);
      },
       other:{
                                        //empety object
       }

     }
}
console.log(codemindMembers); // log object  codemindMembers

console.log( typeof codemindMembers); // type of object codemindMembers

 codemindMembers.member8="komalS" //add key and value 
console.log(codemindMembers);

codemindMembers.member1="pooja aldar" // add key and value
console.log(codemindMembers);

delete codemindMembers.member8; //delete the key and value
console.log(codemindMembers);

console.log(codemindMembers.surname);  //add nested object surname

var fullName=codemindMembers.member2 +" "+ codemindMembers.surname.surname2; //concat 2 datamember
console.log(fullName);

console.log(codemindMembers.surname.age(2,3)); //functioncall with return
 console.log(codemindMembers.surname.gender);
 
 codemindMembers.surname.other.city="pune";
 codemindMembers.surname.other.pincode="300118";
 codemindMembers.surname.other.email="xyz@gmail.com";
  console.log(codemindMembers.surname.other);   //add  datamember and memberfunction in empty object

  codemindMembers.surname.other.city="mumbai";  //update or modify property in nested object
 console.log( codemindMembers.surname.other);   
