// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild: 가장 처음 자식만 선택
// .lastElementChild: 가장 마지막 자식만 선택

// .nextElementSibling
// .previousElementSibling

// .parentElement
// .children


// --------- .firstElementChild --------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
    ulElement.firstElementChild.style.backgroundColor = "yellow";
})


// --------- .nextElementSibling --------------
// --------- .previousElementSibling ----------

const apple = document.getElementById("apple");
const orange = apple.nextElementSibling;
orange.style.backgroundColor = "orange";

const fruits = document.getElementById("fruits");
const vegetables = fruits.nextElementSibling;
vegetables.style.backgroundColor = "green";

const iceCream = document.getElementById("ice-cream");
const pie = iceCream.previousElementSibling;
pie.style.backgroundColor = "red";


// --------- .parentElement -------------------

const orange = document.getElementById("orange");
const fruits = orange.parentElement;
fruits.style.backgroundColor = "yellow";


// -------------- .children -------------------

const fruits = document.getElementById("fruits");
const allChildren = fruits.children;
console.log(allChildren);                   // HTML Collection

Array.from(allChildren).forEach(child => {
    child.style.backgroundColor = "yellow";
})

allChildren[1].style.color = "red";