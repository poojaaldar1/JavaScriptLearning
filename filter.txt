class employee1 {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
    }
    }
    let  emp_anil =new employee1(22,"Anil","IT",50000,"TCS");
    let  emp_radha =new employee1(33,"Radha","HR",74000,"Wipro");
    let emp_rishi =new employee1(55,"Rishi","Finance",45000,"TCS");
    let emp_sonali =new employee1(66,"Sonali","Finance",45000,"Wipro");
    let emp_monika=new employee1(77,"Monika","IT",40000,"Wipro");
    let emp_viny =new employee1(88,"Vinayak","IT",75000,"TCS");
    let emp_mahi=new employee1(99,"Mahesh","HR",85000,"Infy");
    console.log("=======find all employee in TCS");    
    const array123=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
const filetrarray = array123.filter((currentvalue)=>{
    if(currentvalue.emp_company=="TCS"){console.log(currentvalue.emp_company,currentvalue.emp_name);}
})
console.log("=======find all employee in Wipro");
 const wiproemp =array123.filter((currentvalue)=>{
    return currentvalue.emp_company=="Wipro"});
    wiproemp.forEach((element)=>{console.log("",element);})

console.log("=======find all employee from IT And HR ============");
array123.filter((currentvalue)=>{
    if(currentvalue.emp_dept=="IT"||currentvalue.emp_dept=="HR"){console.log(currentvalue);}
});
console.log("=======find all employee id >50 ============");

const idarray= array123.filter((currentvalue)=>{
    return currentvalue.emp_id>50;

    });
    idarray.forEach(element => {
        console.log(element);
    });
const salarray=[];
array123.filter((sal)=>{
//  console.log(sal.emp_salary);
salarray.push(sal.emp_salary);    
});
// console.log(salarray);
let sumofsal =salarray.reduce((sum,value)=>{
    return sum+value;
});
console.log("============avg salary of all employee");
console.log(sumofsal/salarray.length);  

console.log("============avg salary of IT employee");
const avgsalaryofIT =array123.filter((dept)=>{
return dept.emp_dept=="IT";
});
// const blamkarray =[];
//  blamkarray=avgsalaryofIT.push(dept.emp_salary);
// let itsalarray= avgsalaryofIT.reduce((sum,value)=>{
//     return sum+value;
// })
// console.log(itsalarray/avgsalaryofIT.length);
    
    
    
    
    
    
    
    
    
    
    
    
    
    