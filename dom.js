//to fetch firstElementChild or lastElementChild
var heading = document.firstElementChild.lastElementChild.firstElementChild;
console.log(heading);

//Modifying HTML text of an element
heading.innerHTML = "Good!";

//To search the first occurance of an particular tag
document.querySelector("h1").style.color = "blue";

//To get a list of all the elements of a particular tag and modifying their properties.
document.getElementsByTagName("li")[2].style.color = "green"; //3rd element's color property set to red. getElementsByTagName returns a list of all the elements avaialable in the document
console.log(document.getElementsByClassName("btn").length);
document.querySelector("li a").style.color = "orange";
document.getElementsByTagName("li")[1].style.color = "green";