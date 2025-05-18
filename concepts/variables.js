// variable(변수) = A container that stores a value.
//                  Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

// 변수 이름은 unique 해야한다. 같은 변수 선언을 여러 번 할 수 X
let x;

x = 10;
console.log(x);

// 변수 선언과 할당 동시에 가능능
let y = 123;

// data type(자료형) 확인 방법
// data type: number
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

// ``를 사용할 때만 변수를 문장 안에 넣을 수 있다.
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

// data type: string
let firstName = "Janghun";
let favoriteFood = "Pizza";
let email = "asdf123@naver.com"

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

// data type: Boolean(논리 값)
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Janghun is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

// JS를 이용해 html의 content 바꾸기
let fullName = "Yoo Janghun";
let myAge = 25;
let student = true;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${myAge} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;