//Creating an object using an object literal. We can create a single object via this method.
var person = {
    name: 'John',
    age : 31,
    favColor: "green",
    height: 183,
    grow: function() { //Function inside an object is called a method. We need to use function literal.
        this.age++;
    }
}

console.log(person.name);
console.log(person.name.length);
console.log(person["age"]);
person.grow();
console.log(person["age"]);

//To create multiple objects of same type, we can create a constructor:
function human(name, age, color){
    this.name = name;
    this.age = age;
    this.favColor = color;
    this.grow = function(){ //We need to use function literal.
        this.age++;
    }
    this.yearOfBirth = yOB; //Initializing a method with a function declared outise. yearOfBirth is a function here.
}

function yOB(){
    return 2023 - this.age;
}

var h1 = new human("Amy", 21, "red"); //Then, we can create objects using new keyword.

console.log(h1.name);
console.log(h1.yearOfBirth());

console.log(h1.age);
h1.grow();
console.log(h1.age);

//ES6 Syntax:
// Creating an object using an object literal:
let tree = {
    height: 10,
    color: 'green',
    grow() {     //ES6 doesn't require ':' and function keyword.
        this.height += 2;
    }
};

tree.grow();
console.log(tree.height); // 12