var heading = document.firstElementChild.lastElementChild.firstElementChild;
console.log(heading);
heading.innerHTML = "Good!";
document.querySelector("h1").style.color = "blue";
document.getElementsByTagName("li")[2].style.color = "red"; //3rd element's color property set to red. getElementsByTagName returns a list of all the elements avaialable in the document