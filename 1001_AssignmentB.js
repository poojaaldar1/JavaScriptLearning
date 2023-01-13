console.log("-------------Assignment B-----------------");
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

console.log("1.Creating map of with emplyee object & traversing eith for each loop");
    let mapOfEmployee = new Map();
    mapOfEmployee.set(1, emp_anil);
    mapOfEmployee.set(2, emp_radha);
    mapOfEmployee.set(3, emp_rishi);
    mapOfEmployee.set(4, emp_sonali);
    mapOfEmployee.set(5, emp_monika);
    mapOfEmployee.set(6, emp_viny);
    mapOfEmployee.set(7, emp_mahi);


    mapOfEmployee.forEach((employeeObject,Reg_no) => {
        console.log(employeeObject.emp_id,employeeObject);
    } );



    console.log("-------------Assignment A-----------------");
    const empArray = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]


    console.log("------------1.Findout TCS employees using forEach loop------------");
    empArray.forEach(value => {
       if (value.emp_company=="TCS") {
         
        console.log(`Employee name is :${value.emp_name}, Company name is :${value.emp_company}`);
       }
    });
   

    console.log("------------2.Findout Employees Salary is greter than 50000, using forEach loop------------");
    empArray.forEach(value => {
       if (value.emp_salary>=50000) {
         
        console.log(`Employee name is :${value.emp_name}, Salary is :${value.emp_salary}`);
       }
    });
   

 console.log("------------3.Findout the sum of all employees using forEach loop------------");
 let sum = 0;
   empArray.forEach(currentvalue => {
            sum = sum +currentvalue.emp_salary
            });
console.log(`Employee Salary is :${sum}`);


    console.log("------------4.Findout the avg salary employees using forEach loop------------");
empArray.forEach(element => {
     Avg = sum/empArray.length
   });
console.log(`Average Salary is :${Avg}`);


console.log("------------5.Findout IT Or HR dept employess salary is >=75000, using forEach loop------------");
empArray.forEach(value => {
   if ((value.emp_dept=="IT" || value.emp_dept=="HR") && (value.emp_salary>=75000)) {
     
    console.log(value);
   }
});
