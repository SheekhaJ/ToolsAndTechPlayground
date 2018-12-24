var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
// function greeter(){
//     return "Hello from the basic greeter function";
// }
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user1 = {firstName: "John"}
var user2 = { firstName: "Jane", lastName: "Doe" };
var user3 = new Student("John", "R", "Doe");
document.body.innerHTML = greeter(user2);
//document.body.innerHTML = greeter(user3)
