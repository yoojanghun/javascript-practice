// Promise = An object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


// 구방식에선 Callback Hell 방식으로 비동기 함수를 다룸. 하지만 이는 읽기 어려움.
// function walkDog(cb) {
//     setTimeout(() => {
//         console.log("You walked the dog");
//         cb();
//     }, 1500);
// }

// function cleanKitchen(cb) {
//     setTimeout(() => {
//         console.log("You cleaned the kitchen");
//         cb();
//     }, 2500);
// }

// function takeOutTrash(cb) {
//     setTimeout(() => {
//         console.log("You taked out the trash");
//         cb();
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("finished!!");
//         })
//     })
// })


// 먼저 Promise 객체 생성
// const myPromise = new Promise();

// Promise 객체 안 인수로 실행 함수를 넣어야 함.
// 그 실행 함수는 두 개의 매개변수(resolve 함수, reject 함수)를 자동으로 받음.
// resolve 함수 => 작업 성공 시 호출됨 
// reject 함수 => 작업 실패 시 호출됨 

const myPromise = new Promise((resolve, reject) => {
    // 비동기 함수 실행...
    let success = true;

    if(success) {
        resolve("성공");
    }
    else{
        reject("실패");
    }
})

// resolve 함수 => 작업 성공 시 호출됨 => .then() 실행됨
// reject 함수 => 작업 실패 시 호출됨 => .reject() 실행됨

// .then 메서드를 실행하면 result에 resolve에서 넣어 주었던 값이 들어옴("성공")
// .catch 메서드를 실행하면 error에 reject에서 넣어 주었던 값이 들어옴("실패")

myPromise.then((result) => {
    console.log("작업 성공으로 .then() 호출됨 =>", result);
}).catch((error) => {
    console.log("작업 실패로 .catch() 호출됨 =>", error);
}) 


// Callback Hell을 Promise로 변환한 결과
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                resolve("You walked the dog!!");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    })
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned) {
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    })
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut) {
                resolve("You taked out the trash");
            }
            else{
                reject("You DIND't take out the trash");
            }
        }, 500);
    })
}

walkDog()
.then((result) => {console.log(result); return cleanKitchen()})
.then((result) => {console.log(result); return takeOutTrash()})
.then((result) => {console.log(result); console.log("finished!!")})
.catch((error) => {console.log(error);});

// .catch()는 위 체인 중 하나라도 reject되면 바로 .catch()로 빠진다.