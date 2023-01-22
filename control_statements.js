var a = 1;
var b = '1'; //'1' and "1" are both strings in javascript.
console.log(typeof a); //number
console.log(typeof b); //string

if(a === b){
    console.log(true);
}
else{
    console.log(false);
}
//This gives false since '===' operator checks for datatype too.

if(a == b){
    console.log(true);
}
else{
    console.log(false);
}
//This gives true since '==' operator doesn't check for datatype.