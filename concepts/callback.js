// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations:
//            1. Reading a File
//            2. Network requests
//            3. Interacting with database

//            "Hey, when you're done, call this next"


hello(wait);

function hello(callback) {
    console.log("Hello");
    callback();
}

function wait() {
    console.log("Wait");
}

function leave(){
    console.log("Leave!!");
}

function goodbye() {
    console.log("goodbye");
}

/* ---------------------------------- */

sum(displayPage, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}