const mapOfStudent= new Map();
mapOfStudent.set(1, "Varsha");
mapOfStudent.set(2,"Pooja");
mapOfStudent.set(3,"hitesh");
mapOfStudent.set(4,"amit");
mapOfStudent.set(5,"rita");
mapOfStudent.set(6,"komal");
console.log(mapOfStudent);
console.log(`=====================================================`);

 const keyOfStd= mapOfStudent.keys();   //only key will display
 console.log(keyOfStd);

  const valueOfMap = mapOfStudent.values();  //dipslay values of map
  console.log(valueOfMap);

   const getValue4=mapOfStudent.get(4);
   console.log(getValue4);

   mapOfStudent.set(4,"chetan");          //chnag the value of map
   console.log(mapOfStudent);

   const isAvalable= mapOfStudent.has(7);     //if key is not availble it will show false value
   console.log(isAvalable);

console.log(`======================================================`);
   for (const key of  keyOfStd) {         //traverse the keys
    // console.log(`${key}`); 
    if(key==4)
    {
    console.log( key, mapOfStudent.get(key));
    }
   }
    console.log(`====================================================`);
   for (const key of mapOfStudent) {     // trevaerse the map
    console.log(key);
   }
   console.log(`====================================================`);
//    for (const value of keyOfStd) {
//     //  console.log(value);

//      if(value=="varsha")
//      {
//         console.log(key,mapOfStudent.get(key));
//      }
//    }

class Student{
   constructor(rollNO,name,std,div){
      this.rollNO=rollNO;
      this.name=name;
      this.std=std;
      this.div=div;
   }

   }
   const reeta = new Student(11,"reeta",12,"A");
   const komal=new Student(21,"komal",12,"B");
   const hitesh=new Student(32,"hitesh",12,"B");
   const amit=new Student(43,"Amit",12,"A");
     
   console.log(`Create map`);
   const mapOfStudents =new Map()
  mapOfStudents.set(reeta.rollNO,reeta);
  mapOfStudents.set(komal.rollNO,komal);
  mapOfStudents.set(hitesh.rollNO,hitesh);
  mapOfStudents.set(amit.rollNO,amit);

  const keyofStudents= mapOfStudents.keys();
  console.log("Keys of map:",keyofStudents);        //display keys of object map
  const valuesOfStudent =mapOfStudents.values();
  console.log("Values of map:",valuesOfStudent);     //dsiplay values of object map

for (const key of keyofStudents){
    const student = mapOfStudents.get(key);
  console.log(student.rollNO,student.name);
}


// for (const key of valuesOfStudent){
//    const student = mapOfStudents.get(value);
//  console.log(student.rollNO,student.name);
// }













