// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * / =)
//                        ex. 11 = x + 5;

let student = 30;

student = student + 5;
stdent += 5;

student = student - 7;
student -= 7;

student = student * 4;
student *= 4;

student = student / 2;
student /= 2;

student = student ** 3;
student **= 3;

let extraStudent = student % 7;
student %= 2;

console.log(student);
console.log(extraStudent);

// 두 표현은 같은 표현
stdent += 1;
student++;

stdent -= 1;
student--;

/*
    연산 순서
    1. parenthesis ()
    2. exponents **
    3. multiplication & division & modulo *, /, % 
    4. addition & subtraction +, -
*/

let result = 6 / 2 ** (2 + 5);
console.log(result)