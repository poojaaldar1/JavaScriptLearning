

console.log("-------------Filter & Reduce Assignment-----------------");
class employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil = new employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new employee(99,"Mahesh","HR",85000,"Infy")

const array_emps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.log("1.Findout Employees of Wipro company");
const WiproCompFilter = array_emps.filter( employee=>employee.emp_company == "Wipro")
WiproCompFilter.forEach(element=>console.log(element))
console.log("-------------------------------------------------------------------------------");

console.log("2.Findout all Employees of IT company");
const ITDeptFilter = array_emps.filter( employee=>employee.emp_dept == "IT" || employee.emp_dept == "HR")
ITDeptFilter.forEach(element=>console.log(element))
console.log("-------------------------------------------------------------------------------");

console.log("4.Findout all Employees Whose em_Id id is >50");
const empIdGreter = array_emps.filter( employee=>employee.emp_id > 50)
empIdGreter .forEach(element=>console.log(element));
console.log("-------------------------------------------------------------------------------");

console.log("4.Findout all Employees Whose name start with A,V,M");
const empNameStart = array_emps.filter(value => value.emp_name.startsWith("A") || value.emp_name.startsWith("V") || value.emp_name.startsWith("M"));
empNameStart.forEach(element=>console.log(element));
console.log("-------------------------------------------------------------------------------");

console.log("5.Findout avg salary all Employees");
let empSalary=[];
array_emps.forEach((value)=>{
    empSalary.push(value.emp_salary)
})
console.log(empSalary);
const result = empSalary.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(`Average salary of all employees= ${result/empSalary.length}`);
console.log("-------------------------------------------------------------------------------");


console.log("6.Findout avg salary of IT dept Employees");
const avgSalaryIT = array_emps.filter(value=>value.emp_dept=="IT");
let salaryIT =[];
avgSalaryIT.forEach((element)=>{
    salaryIT.push(element.emp_salary)
});
// console.log(salaryIT);
const avgITSalary = salaryIT.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(`Avg salary of IT dept employees is = ${avgITSalary/salaryIT.length}`);