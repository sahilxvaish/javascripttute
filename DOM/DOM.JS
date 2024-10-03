console.log("hello");
alert("sahil");

//window object
//window object is the global object in the browser.
//It is the topmost object in the browser and it has many properties and methods.
//Some of the properties and methods of the window object are:
//1. window.location
//2. window.history
//3. window.sessionStorage
//4. window.setTimeout()
//5. window.clearTimeout()
//6. window.setInterval()
//7. window.clearInterval()
//8. window.open()
//9. window.close()

//WHAT IS DOM (Document Object Model)?
//DOM is a programming interface for HTML and XML documents. It represents the structure of a document as
//a tree-like data structure. Each node in the tree represents an element in the document.

//DOM manipulation
//DOM manipulation is the process of changing the structure of a document by adding, removing, or modifying
//elements. This can be done using JavaScript.

console.dir(window.document);
console.dir(document);
console.dir(document.body);
console.dir(document.head);

//selecting with id 
console.dir(document.getElementById("myId"));
//# (represents id)

//selecting with class
console.dir(document.getElementsByClassName("myClass"));
//. (represents class)

//selecting by tags 
console.dir(document.getElementsByTagName("p"));
//paragraphs

//Query selector
console.dir(document.querySelector("#myId")); //return first element 
console.dir(document.querySelectorAll("p"));   //returns node list 

//properties
//tag name
//returns tag for element nodes
//inner text
//returns text content of element and all its children
console.dir();
let div = document.querySelector("div");
console.dir(div);
div.innerHTML

//text content 
console.dir(div.textContent);

//DOM manipulation 
//attributes 
//getAttribute (attr) to get the attribute value.
div.getAttribute("id");
//setAttribute (attr, value) to set the attribute value.
div.setAttribute("class", "myClass");
//style attribute 
div.style("style", "color: red;");
div.style.backgroundColor = "red";
div.style.fontSize = "26px";

//insert elements 
//appendChild (child) to add a child element to the end of the parent element.
div.appendChild(document.createElement("p"));
//prependchild
div.prepend(document.createElement("p"));
//before 
div.before(document.createElement("p"));
//after
div.after(document.createElement("p"));

//delete element
//remove() to remove the element from the DOM.
div.remove("p");