var l = [45, 34, 67, 22];
//This is an object
var o = { 'a': 99, 'b': 55, 'c': 11 }

//This is a map
var m = new Map()
m.set('a', '99')
m.set('b', '55')
m.set('c', '11')

console.log('o is ' + o)
console.log('m is ' + m)

for (let i in o) {
    console.log('i in object o is ' + i)
}

for (let [key, value] of m) {
    //console.log(`i in map m is ${key} and value is ${m.get(key)}`)
    //Following behaves in the same way
    console.log(`i in map m is ${key} and value is ${value}`)
}

console.log('-----------------------------------------')

//Code to see how for..in and for..of works
console.log('Code to see how for..in and for..of works')
for (let t in l) {
    console.log('Value of t in l is ' + t);
}

for (let t of l) {
    console.log('VAlue of t in l using of is ' + t)
}

console.log('-------------------------------------')

for (let t in o) {
    console.log('Value of t in m is ' + t);
}

// for(let t of m){
//     console.log('VAlue of t in m using of is '+t)
// }

for (let key in o) {
    console.log(`key is ${key} and ${o[key]}`)
}
console.log('------------------------------------------------')

//Making a person object
console.log('Making a person object')

function makePerson(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    this.fullNameReversed = function () {
        return this.lastName + " " + this.firstName;
    };
}

console.log('Person is ', new makePerson('Jane', 'Doe').fullName())

console.log('-------------------------------------')

console.log('Creating an improved version of Person object')
function improvedMakePerson(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

improvedMakePerson.prototype.fullName = function(){
    return "Full name from improvedMakePerson is '"+this.firstName+" "+this.lastName+"'";
}

improvedMakePerson.prototype.fullNameReversed = function(){
    return "Full name from improvedMakePerson is '"+this.lastName+" "+this.firstName+"'";
}

console.log(new improvedMakePerson('Improved Jane', 'Doe').fullName())
console.log(new improvedMakePerson('Improved Jane', 'Doe').fullNameReversed())

console.log('--------------------------------------')

console.log('Creating closures')
function makeAdder(a){
    return a;
    function makeAdder(b){
        return a+b;
    }
}

console.log(makeAdder(7))
console.log(makeAdder(6))