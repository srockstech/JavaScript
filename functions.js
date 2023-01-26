function person(name, age){
    this.name = name;
    this.age = age;
}

function year(){
    var age = 23;
    return 2022 - age;
};

var p1 = new person("Sarvagya Verma", 22);

console.log(year());

//ES6 syntax
//Functions can be defined like this, when there are no parameters
const greet1 = () => {
    console.log("Hello there!");
}

const greet2 = x => {
    console.log("Hello " + x);
}

const greet = v => "Welcome " + v; //For a one line function returning a value, we can exempt from using return keyword and braces

greet1();

console.log(greet("Sarvagya"));
