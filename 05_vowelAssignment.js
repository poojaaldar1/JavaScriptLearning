// var sentence = "I AM Learining JavaScript,The Language of internet";

 function countcharA(string) {
  var counter=0

for (let index = 0; index < string.length; index++) {
    var count =string.charAt(index)
    if (count=="a" || count=="A") {
    console.log(` ${string}: ${count}`);
    counter = counter+1
    console.log(`Total number of a& A in given string is : ${counter}`);
    
                    }
    }
  }
    countcharA ("I AM Learining JavaScript,The Language of internet");
    countcharA ("My favourite movie is LAggAn");











// var sentence = "My favourite movie is LAggAn";
// var counter = 0;
// for (let index = 0; index <= sentence.length; index++) {
//   var char= sentence.charAt(index);
//   if (char==`a`||char==`e`||char==`i`||char==`o`||char==`u`||
//   char==`A`||char==`E`||char==`I`||char==`O`||char==`U`) 
//   {
//     console.log(char);
// counter = counter+1;
//   }
// }
// console.log(`Total Chara of the string is ${counter}`); 