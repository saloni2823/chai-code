"use strict"; //treat all js code as newer version 

//(alert)  we are using nodejs, not browser   
console.log(3+
    3);// codereadbility should be high 

console.log("saloni")

// ============================================
// DIFFERENCE BETWEEN VAR, LET, AND CONST
// ============================================

// 1. VAR - Function scoped (old way, ES5)
var name = "saloni";
var age = 22;
var isloggedIn = true;

console.log("--- VAR EXAMPLE ---");
console.log(name, age, isloggedIn);

// VAR can be re-declared and re-assigned
var name = "john"; // Can re-declare
name = "alice"; // Can re-assign
console.log(name); // Output: alice

// VAR hoisting - declared but undefined at top
console.log(oldVar); // Output: undefined (not error)
var oldVar = 5;

// ============================================

// 2. LET - Block scoped (ES6, recommended)
let userName = "saloni";
let userAge = 22;
let userLoggedIn = true;

console.log("--- LET EXAMPLE ---");
console.log(userName, userAge, userLoggedIn);

// LET cannot be re-declared but can be re-assigned
// let userName = "john"; // ERROR: Identifier 'userName' has already been declared
userName = "john"; // Can re-assign - this is fine
console.log(userName); // Output: john

// LET is block scoped
if (true) {
    let blockLet = "inside block";
    console.log(blockLet); // Output: inside block
}
// console.log(blockLet); // ERROR: blockLet is not defined outside block

// ============================================

// 3. CONST - Block scoped, cannot be re-assigned (ES6)
const PI = 3.14;
const country = "India";

console.log("--- CONST EXAMPLE ---");
console.log(PI, country);

// CONST cannot be re-declared or re-assigned
// PI = 3.15; // ERROR: Assignment to constant variable

// But object/array properties can be modified
const user = {
    name: "saloni",
    age: 22
};
user.age = 23; // This is allowed
console.log(user); // Output: { name: 'saloni', age: 23 }

// ============================================
// QUICK COMPARISON TABLE:
// VAR    - Function scoped, can re-declare, can re-assign
// LET    - Block scoped, CANNOT re-declare, can re-assign
// CONST  - Block scoped, CANNOT re-declare, CANNOT re-assign
// ============================================

//Total data types in js=>
//number=> 2 to power 53
//bigint=> larger than 2 to power 53
//string=>" " or ' ' or ` `
//boolean=>true/false
//null=> standalone value let state; output me undefined ayga so its use here 
//undefined=>default value when variable is not initialized
//symbol=>unique


// object=>collection of key value pairs
//function=> subprograms

console.log(typeof null);//object
console.log(typeof undefined);//undefined
