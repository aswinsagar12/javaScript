function Employee(name, designation, department) {
    this.name = name;
    this.designation = designation;
    this.department = department;

}


Employee.prototype.addEmployee = function() {
    console.log(this.name);
    console.log("Adding Database");

}

Employee.prototype.print = function(value) {

    console.log("printing " + value);
}
console.log(Employee.prototype.addEmployee);
var emp = new Employee("Me", "js", "it");
console.log(emp);
emp.addEmployee();
emp.print("data");