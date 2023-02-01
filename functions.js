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

//When there is only one parameter
const greet2 = x => {
    console.log("Hello " + x);
}

//When there are multiple parameters
const greet3 = (x, y) => {
    console.log("Hello " + x + " and " + y);
}

const greet = v => "Welcome " + v; //For a one line function returning a value, we can exempt from using return keyword and braces

const arr = [2, 3, 7, 8];

// We can use a function in forEach function of an array to apply it on every element of the array:
arr.forEach(v => {
    console.log(v * 2);
});

greet1();
greet2("Ram");
greet3("Ram", "Shyam");
console.log(greet("Sarvagya"));
