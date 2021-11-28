const empID = (function() {
    let count = 0;
    return function() {
        ++count;
        return `Employee${count}`;

    };
})();
console.log(empID);

console.log("Empl; " + empID());
console.log("Emp2; " + empID());
console.log("Emp3; " + empID());