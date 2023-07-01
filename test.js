var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.displayInfo = function () {
        console.log('id is ', this.id, 'and name is ', this.name);
    };
    return Student;
}());

var std1 = new Student(101, 'John Doe');
std1.displayInfo(); // prints ‘id is 101 and name is John Doe’
var std2 = new Student('202', 'Bruce Wayne');
std2.displayInfo(); // prints ‘id is 202 and name is Bruce Wayne’
