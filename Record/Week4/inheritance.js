class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayEmployee() {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
// Child class inherits from Employee
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    displayManager() {
        console.log("Department:", this.department);
    }
}

// Create object of child class
let manager1 = new Manager("Rahul", 50000, "IT");
// Calling inherited method
manager1.displayEmployee();
// Calling child class method
manager1.displayManager();