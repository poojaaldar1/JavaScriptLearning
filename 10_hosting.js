console.log(city);

var city = "Pune";


let state = "MH";                             
console.log(state);

show();                                         //function cll before declaration

function show(){
    console.log("Hello I am in show");
}

display();                                       //function cll before declaration
var display = function(){
    console.log("Hello I am in display");
}
