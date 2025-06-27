// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style DataTransfer, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})


// fetch는 Promise 객체를 반환함. 내부적으로 성공 시 자동으로 resolve()가 호출됨(요청 실패 시 reject 호출됨)
// 그 resolve와 reject에 대해 .then(), .catch()로 대응
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())           // Response 객체 안에 있는 body(본문 데이터)를 JSON으로 파싱(parsed)후 파싱된 JSON 데이터가 담긴 Promise를 return
    .then(data => console.log(data))             // 그 Promise가 resolve될 때 data엔 파싱된 객체가 들어옴(서버의 JSON을 자바스크립트로 객체로 변환한 값이 들어옴) 
    .catch(error => console.error(error));

    
// response 객체 안에 ok라는 속성이 true이면 fetch가 성공했다는 뜻
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("이런 에러가 났군요!!!");
        }
        return response.json()})           
    .then(data => console.log(data.name))   
    .catch(error => console.error(error));


fetchData();
async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/squirtle");
    
    try{
        if(!response.ok) {
            throw new error("없는 포켓몬 입니다.");
        }
        
        const data = await response.json();     // response.json() promise 객체 반환하므로 await 써야 함
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}