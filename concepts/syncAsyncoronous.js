// synchronous  = Excutes line by line consecutively in a sequential manner
//                Code that waits for an operation to complete

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callback, Promises, Async/Await


// 아래는 비동기 함수
setTimeout(() => {
    console.log("Task 1");
}, 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");


// Callback 함수를 이용해 동기로 만들기
function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000)
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);