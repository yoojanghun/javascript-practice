// Callback Hell = Situation in JS where callbacks
//                 are nested within other callbacks to the 
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promise + async/await to aviod Callback Hell.

function task1(cb) {
    setTimeout(() => {
        console.log("Task 1 completed");
        cb();
    }, 2000);
}

function task2(cb) {
    setTimeout(() => {
        console.log("Task 2 completed");
        cb();
    }, 1000);
}

function task3(cb) {
    setTimeout(() => {
        console.log("Task 3 completed");
        cb();
    }, 3000);
}

function task4(cb) {
    setTimeout(() => {
        console.log("Task 4 completed");
        cb();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks are completed!!");
            });
        })
    })
})