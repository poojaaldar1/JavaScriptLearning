console.log("_________String Assignment 02______");

greet = "Hey You are doing good,Keep it up"

var stringHandsOn = function () {
    console.log("----1.String log on console-----");
    var greet = "   Hey You are doing good,Keep it up  "
    console.log(greet);

    console.log("--------------------------------------------------------------");

    console.log("----2.Length of string-----");
    console.log("length Of String Is", greet.length);
    console.log("--------------------------------------------------------------");

    console.log("----3.Removing Extra Space-----");
    var aftterTrim = greet.trim()
    console.log(aftterTrim);

    console.log("--------------------------------------------------------------");

    console.log("----4.Total no of count of removing space-----");
    console.log("Before Removing Extra Space", greet.length);
    var resultTrim = greet.trim()
    console.log("After Removing Extra Space", resultTrim.length);

    console.log("--------------------------------------------------------------");

    console.log("----5.1st & last Char. On same line with using substitution-----");
    console.log(`1st chara is ${aftterTrim.charAt(0)} and last chara is ${aftterTrim.charAt(aftterTrim.length - 1)}`);
    console.log("--------------------------------------------------------------");


    console.log("----6.Count of Total-----");
    var greeting = "Hey You are doing good,Keep it up";
    var greetSplit = greeting.split(" ")
    console.log("Total no of words are ", greetSplit.length);
    console.log("--------------------------------------------------------------");

    console.log("----7.Index of word-----");
    console.log(greeting.indexOf("good"));
    console.log("--------------------------------------------------------------");

    console.log("----8.Subsrting & slice-----");
    var greeting = "Hey You are doing good,Keep it up";
    console.log("A.Using Substring:", greeting.substring(23));
    console.log("B.Using Slice:", greeting.slice(5));
    console.log("--------------------------------------------------------------");

    console.log("----9.Include-----");
    console.log(aftterTrim.includes("up"));
    console.log("--------------------------------------------------------------");

    console.log("----10.Include-----");
    console.log(aftterTrim.includes("Hey"));
    console.log("--------------------------------------------------------------");



}
stringHandsOn()