class Student{
    fullName: string
    constructor(public firstName: string, public middleName: string, public lastName: string){
        this.fullName = firstName+" "+middleName+" "+lastName;
    }
}

//Note that TypeScript supports method overloading based on number of parameters. 

interface Person{
    firstName: string;
    lastName: string;
}

// function greeter(){
//     return "Hello from the basic greeter function";
// }

function greeter(person: Person){
    return "Hello, "+person.firstName + " "+person.lastName;
}

//let user1 = {firstName: "John"}
let user2 = {firstName: "Jane", lastName: "Doe"};
let user3 = new Student("John", "R", "Doe")
document.body.innerHTML = greeter(user2)
//document.body.innerHTML = greeter(user3)