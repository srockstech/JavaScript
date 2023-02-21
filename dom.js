//to fetch firstElementChild or lastElementChild
var heading = document.firstElementChild.lastElementChild.firstElementChild;
console.log(heading);

//Modifying HTML inside the tags of an element
heading.innerHTML = "<i>Good!</i>";

//Modyfying only the text (at any level deep) inside the specified element
heading.textContent = "Hello";

//To search the first occurance of an particular tag
document.querySelector("h1").style.color = "blue";

//To get a list of all the elements of a particular tag and modifying their properties.
document.getElementsByTagName("li")[2].style.color = "cyan"; //3rd element's color property set to red. getElementsByTagName returns a list of all the elements avaialable in the document

//To get a list of all the elements of a particular class and modifying their properties.
console.log(document.getElementsByClassName("btn").length);

//To get an element by specifying the element's and its parent's tag name.
document.querySelector("li a").style.color = "orange";

//Changing fontSize of an element.
document.querySelector("h1").style.fontSize = "100%";

//Changing background color of a button.
document.querySelector("button").style.backgroundColor = "yellow";

//Styles shouldn't be changed using javascript using style property, rather, the style should be mentioned in a class in CSS and then that class should be added and removed from the element as per the needs.
//Since javascript is added at the bottom in the HTML file, the style property of javascript is given preference and CSS classes don't work (even with classList property in javascript ). Hence, we should avoid using style property in CSS.
//Adding a class from an element
document.querySelector("h1").classList.add("huge");

//Removing a class from an element
document.querySelector("h1").classList.remove("huge");

//Togging a class on and off attached to an element
document.querySelector("h1").classList.toggle("huge");

//Listing current attributes on a HTML document
console.log(document.querySelector("a").attributes);

//Fetching value of a particular attribute of a HTML element
console.log(document.querySelector("a").getAttribute("href"));

//Setting a new attribute to an HTML document or changing value of an existing attribute
document.querySelector("a").setAttribute("href", "https://www.bing.com/"); //changing value of an existing attribute
document.querySelector("a").setAttribute("class", "search"); //Adding a new attribute
console.log(document.querySelector("a").attributes);