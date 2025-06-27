// Async/Await : 자바스크립트에서 Promise 기반 비동기 코드를 더 깔끔하게 쓰기 위해 나온 문법
// Async = 함수가 Promise를 리턴한다는 표시
// Await = Promise가 끝날 때까지 기다렸다가 결과 값을 받아옴

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

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

// await 키워드가 붙은 함수 호출은 해당 함수가 끝나기 전까지 그 아래 코드가 작동되지 않음
// await 키워드가 있는 줄은 동기적으로 실행됨
// await 키워드는 async가 붙은 함수 내에서만 사용 가능

async function doChores() {
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("finished!!");
    }
    catch(error) {
        console.log(error);
    }
}

doChores();