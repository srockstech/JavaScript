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
const greet = v => "Welcome " + v; //For a one line function returning a value, we can exempt from using return keyword and braces
console.log(greet("Sarvagya"));
