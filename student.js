function Student(name, Class, age) {
    this.name = name;
    this.classes = Class;
    this.age = age;

}

Student.prototype.addStudent = function() {
    console.log("Student Name " + this.name);

}

Student.prototype.update = function(value) {
    console.log("Student age details updating " + this.age);

}
Student.prototype.get = function() {

    console.log("Getting data ");
}



Student.prototype.print = function(name) {

        console.log("printing " + this.name + "'s Data ");
    }
    //final out
console.log(Student.prototype.addStudent);
var std = new Student("Aswin", "12th", 20);
console.log(std);

std.print("Data");
std.update("Aswin Sagar");
std.get();
Student.prototype.delete = function(value) {

    console.log("Deleting " + this.name + " data");
}
std.delete("name");