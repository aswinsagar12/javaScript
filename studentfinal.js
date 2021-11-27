function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
}
Student.prototype.add = function(name, age, id) {
    console.log(`${name} is ${age} old`);
}
Student.prototype.get = function() {
    console.log("get")
}
Student.prototype.update = function() {
    console.log("update")
}
Student.prototype.delete = function() {
    console.log(this.age)
    console.log("delete");
}
var s = new Student("Lalit", 21);
s.add("Pushpa", 23, 2);
s.get();
s.update(12);
s.delete();