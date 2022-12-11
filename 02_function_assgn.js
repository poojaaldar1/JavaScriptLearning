
function Learning() {
    console.log("1.--function with no argu.&no return--")
    console.log("Learning CSS");
    console.log("Learning HTML");
}
Learning()

console.log("\n")

console.log("2.--function with argu.&no return--")
function personalDetails(firstName, lastName, collegename) {
    console.log(firstName, lastName, collegename);
}
personalDetails("Pooja", "Aldar", "TKIET Warana")

console.log("\n")

console.log("3.--function with argu.&swap--")
function swapValue(value1, value2) {

    console.log("before swap", value1, value2);
    temp = value1
    value1 = value2
    console.log("before swap", value1, value2);
}
swapValue("virat", "Anushka")
swapValue(1000, 2000)

console.log("\n")

console.log("4.--Addition Three values--")
function add(val1, val2, val3) {

    console.log("addition of Three No:", val1 + val2 + val3);
}
add(10.23, 600, 40)
add("hello", "Good", "Morning")