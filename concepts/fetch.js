// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style DataTransfer, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})


// fetch는 Promise 객체를 반환함. 내부적으로 성공 시 자동으로 resolve()가 호출됨(요청 실패 시 reject 호출됨)
// 그 resolve와 reject에 대해 .then(), .catch()로 대응


async function fetchData() {

    const pokemonName = document.getElementById("poketmonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    try{
        if(!response.ok) {
            throw new error("없는 포켓몬 입니다.");
        }
        
        const data = await response.json();     // response.json() promise 객체 반환하므로 await 써야 함
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}