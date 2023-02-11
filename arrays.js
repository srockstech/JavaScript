var arr = []; //declaring an empty array
var arr1 = [1,4,5,6] //initializing and declaring at the same time
arr.push(3); //adding 3 to the array
arr.push(5); //adding 5 at the end of the array
arr.push("Fizz"); //we can add data of any type to the array
arr1.pop(); //removing the last element from the array
console.log(arr); //printing the complete array
console.log(arr.includes(5)); //searching for an element in an array
console.log(arr1);

function whosPaying(names) {
        var randomIndex = Math.floor(Math.random()*names.length);
        //Mat.random() generates a random no in the range [0.0000000000000000, 0.9999999999999999];
        //To generate a non-decimal no to a maximum of n, we multiple Math.random() with (n+1) and take Math.floor() of it.
        console.log(`${names[randomIndex]} is going to buy lunch today!`);
}
var array = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(array);