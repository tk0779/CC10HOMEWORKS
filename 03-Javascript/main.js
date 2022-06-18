//20220608 Re-study JS
//----------------------
// 3 --Variable
// keywords = var , let , const
// var is global variable-like
// can console var before define it
// var is global scope or function scope
// if var is inside the function it cannot use outside the function
// ต่างกันที่ scope - function , block, global scope
//----------------------
console.log(` *** 3 -- Variable ***`)
let message = 'Hello';
message = 'Hello2!';

let a = 20;
let b = 30;
let c = a + b;

var d = 'Hi';
const e = 'World'; // e cannot change 

console.log(message)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

function newFunction(){
    var hello = 'hello';
    const say = 'say'
    console.log(hello);
    console.log(say);
}
newFunction()
newFunction()

// Variable -- Lab3.1

const name = "TK";
let person = name;
alert(person);

// Variable -- Lab3.2

let money, name2 , address, age;
// ไม่ค่อยนิยมการเขียนแบบนี้

// Variable -- Lab3.3
// const user;
// const role; // ต้อง error  แน่นอน

// Variable -- Lab3.4
const FirstName = 'John';
let lastName = 'Doe';
var nickName = 'JD';
//ให้ประกาศ const กับ let อีกรอบชื่ออื่น เพื่อให้เห็นว่า error
// const FirstName = 'Will';
// let lastName = 'Doe';
var nickName = 'JD';
birthDate = '1 Jan 2000'
console.log(birthDate)

//----------------------
    //4  Data Type
//----------------------

// Number
// String
// boolean
// null 
// undefined
// BigIntSymbol
// Object

//----------------------
console.log(`*** 4--DataType ***`);

let firstName4 = 'John';
let lastName4 = 'Doe';
let nickName4 = 'JD';

let fullName = firstName4 + lastName4;
console.log(fullName)
//ข้างล่างคือใส่ backtick
let fullName1 = `${firstName4} ${lastName4}`;
console.log(fullName1)

// Lab 4.3

console.log(`*** This is Lab 4.3 Typeof ***`);
console.log(typeof "x");
console.log(typeof x);
console.log(typeof (1+'1'));
console.log(typeof (1*'1'));
console.log(typeof (100/0));
console.log(typeof null);
console.log(typeof alert);
// End class hear 1:30 hr spent (2clips)


//----------------------
// 5 -- Type conversion ใน clip live ไม่มี
//----------------------

//----------------------
// 6 -- Basic Operators
//----------------------
//unary, binary, operand
let a = 20 + 5; 
// these are binary, 20 and 5 are operands, + is operator

let c = null;
let d = +c;
//this is unary