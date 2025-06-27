// JSON = (Javscript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3] or [{}, {}, {}]

//        JSON.stringify() = converts a JS object to a JSON.string.
//        JSON.parse() = converts a JSON string to a JS object

const names = ["Songebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Cooking", "Karate"]
};
const people = [
    {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true
    },
    {
    "name":"Patrick",
    "age": 34,
    "isEmployed": false
    },
    {
    "name":"Squidward",
    "age": 50,
    "isEmployed": true
    },
    {
    "name":"Sandy",
    "age": 27,
    "isEmployed": false
    }
];
console.log(names);
console.log(person);
console.log(people);


// JSON.stringify()
const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);

console.log(jsonString1);
console.log(typeof jsonString1);
console.log(jsonString2);
console.log(typeof jsonString2);
console.log(jsonString3);
console.log(typeof jsonString3);


// JSON.parse()
const jsonNames = `["Songebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name":"Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Cooking", "Karate"]}`;
const jsonPeople = `[{"name":"Spongebob", "age": 30, "isEmployed": true},
                    {"name":"Patrick", "age": 34, "isEmployed": false},
                    {"name":"Squidward", "age": 50, "isEmployed": true},
                    {"name":"Sandy", "age": 27, "isEmployed": false}]`;

const parsedNames = JSON.parse(jsonNames);
console.log(parsedNames);
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);
const parsedPeople = JSON.parse(jsonPeople);
console.log(parsedPeople);


// JSON 파일을 fetch(가져오기)
// fetch하면 Promise를 반환함
// response.json도 Promise를 반환함

// fetch는 Response 객체를 리턴한다. 
// Response 객체는 HTTP 상태 코드, 헤더 정보, body 스트림 등 서버 응답 전체 정보를 가짐
// response.json()은 body내용을 JSON으로 parsed해서 돌려줌
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach((value) => console.log(value)));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach((value) => console.log(value.name)));