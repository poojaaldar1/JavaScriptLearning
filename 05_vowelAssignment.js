// var sentence = "I AM Learining JavaScript,The Language of internet";

//  function  countCharA(words) {
//     for (let index = 0; index < sentence.length; index++) {
//        var count =sentence.charAt(index)
//         if (count=="a" && count=="A") {
//             console.log(count);
           
//         }
//     }
// }
// var count = countCharA("a")
// console.log(`Total vowels in string is : ${count}`);

// var sentence = "I AM Learining JavaScript,The Language of internet";
// // Print the vowels only aeiou or AEIOU











var sentence = "My favourite movie is LAggAn";
var counter = 0;
for (let index = 0; index <= sentence.length; index++) {
  var char= sentence.charAt(index);
  if (char==`a`||char==`e`||char==`i`||char==`o`||char==`u`||
  char==`A`||char==`E`||char==`I`||char==`O`||char==`U`) 
  {
    console.log(char);
counter = counter+1;
  }
}
console.log(`Total Chara of the string is ${counter}`); 