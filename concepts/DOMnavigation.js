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