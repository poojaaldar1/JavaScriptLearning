class Employee{
constructor(name,id,age,city){
    this.name=name;
    this.id=id;
    this.age=age;
    this.city=city;
    }

}
let empPooja= new Employee("Pooja",25,55,"Mumbai");
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empPooja);
console.log(empSmith);
console.log(empJay);
console.log(empBill);
console.log(empBill.name,empBill.age);
