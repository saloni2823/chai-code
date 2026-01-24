let score= "33 abc"
console.log(typeof score);
console.log(typeof(score));


let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let isloggedIn="saloni"
let booleanIsloggedIn=Boolean(isloggedIn)
//console.log(booleanIsloggedIn);


//1 => true
//0 => false
//"" => false
//"saloni" => true
//null => false
//undefined => false
//NaN => false
// PI = 3.15; // ERROR: Assignment to constant variable42 => true


let someNumber=33
let stringnumber=String(someNumber)
console.log(stringnumber)
console.log(typeof stringnumber);

//************************************Operations************************************ */
let value=3;
let negvalue=-value;
console.log(negvalue);


//console.log(2+2);(addition)
//console.log(2-2);//subtraction
//console.log(2*2);//multiplication
//console.log(2/2);//division
//console.log(5%2);//modulus
//console.log(5**2);//exponentiation



let str1="saloni"
let str2="panchal"
let str3=str1 + " " + str2
console.log(str3)

//**********String Concatenation vs Addition**********/
//If any one operand is string then it will convert other to string and concatenate
//******Examples******//
console.log("1"+2)// "12"
console.log("saloni"+3)// "saloni3"
console.log(3+"saloni")// "3saloni"
console.log("saloni"+true)// "salonitrue"
console.log(true+"saloni")// "truesaloni"
//******But****** *//
//IF STRING IS ADD AT THE LAST THEN ALL PREVIOUS WILL BE ADDED FIRST AND THEN CONCATENATED
console.log(1+"23")//123
console.log(1+2+3+"3")// "63"
console.log(1+34+56+"saloni")// "91saloni"
console.log(1+2+"saloni")// "3saloni"
console.log("saloni"+1+2)// "saloni12"  



//***********boolean conversion during addition*******//

console.log(+true)// it show 1 because true is converted to 1
console.log(+false)// it show 0 because false is converted to 0
//if we use true+false then both are converted to number and then added
console.log(true+false)// it show 1 because 1+0=1

//but if we use true+1  then  it will show 
console.log(true+1)// it show 2 because true is converted to 1 and then 1+1=2

//***********Operator Precedence**********//

//it is used to know which operator will be executed first in an expression
//higher the precedence value higher the priority
console.log(3+4*5)// it will show 23 because * has higher precedence than + so 4*5=20 and then 3+20=23
console.log((3+4)*5)// it will show 35 because () has highest precedence so 3+4=7 and then 7*5=35       
console.log(2**3**2)// it will show 512 because ** is right associative so 3**2=9 and then 2**9=512
console.log(-(2**2))// it will show -4 because ** has higher precedence than unary - so 2**2=4 and then -4
//console.log(-2**2)// it will show error because unary - has lower precedence than ** so it is equivalent to -(2**2) which is invalid
console.log(2+3*4**2)// it will show 50 because ** has highest precedence so 4**2=16 then * has next precedence so 3*16=48 and then + so 2+48=50
    
//***********Operator Associativity**********//
//it is used to know which operator will be executed first when two operators have same precedence
//left to right associativity means left operator will be executed first
//right to left associativity means right operator will be executed first
console.log(20-10-5)// it will show 5 because - has left to right associativity so 20-10=10 and then 10-5=5
console.log(2**3**2)// it will show 512 because ** has right to left associativity so 3**2=9 and then 2**9=512



//***********Increment and Decrement Operator**********//
let inc=10
console.log(inc++)// it will show 10 because post increment operator returns the value before incrementing it
console.log(inc)// it will show 11 because inc is incremented by 1
let dec=10
console.log(dec--)// it will show 10 because post decrement operator returns the value before decrementing it
console.log(dec)// it will show 9 because dec is decremented by 1

let inc1=10
console.log(++inc1)// it will show 11 because pre increment operator increments the value first and then returns it
let dec1=10
console.log(--dec1)// it will show 9 because pre decrement operator decrements the value first and then returns it

//***********Assignment Operator**********//
let a=10
a+=5 // it is equivalent to a=a+5
console.log(a)// it will show 15
a-=3 // it is equivalent to a=a-3
console.log(a)// it will show 12
a*=2 // it is equivalent to a=a*2
console.log(a)// it will show 24
a/=4 // it is equivalent to a=a/4
console.log(a)// it will show 6
a%=4 // it is equivalent to a=a%4
console.log(a)// it will show 2
a**=3 // it is equivalent to a=a**3
console.log(a)// it will show 8  

//***********Comparison Operator**********//

console.log(3==3)// it will show true because both are equal
console.log(3=="3")// it will show true because == operator converts string to number before comparing
console.log(3===3)// it will show true because both are equal and of same type
console.log(3==="3")// it will show false because === operator does not convert string to number before comparing
console.log(5!=3)// it will show true because both are not equal
console.log(5!="5")// it will show false because != operator converts string to number before comparing
console.log(5!==3)// it will show true because both are not equal and of different type
console.log(5!=="5")// it will show true because !== operator does not convert string to number before comparing
console.log(3>2)// it will show true because 3 is greater than 2
console.log(2<3)// it will show true because 2 is less than 3
console.log(3>=3)// it will show true because 3 is greater than or equal to 3
console.log(2<=3)// it will show true because 2 is less than or equal to 3

//***********Logical Operator**********//

console.log(true && false)// it will show false because both operands are not true
console.log(true || false)// it will show true because at least one operand is true
console.log(!true)// it will show false because ! operator negates the value
console.log(!false)// it will show true because ! operator negates the value    
console.log(true && true && false)// it will show false because all operands are not true
console.log(true || false || false)// it will show true because at least one operand is true
console.log(!(true && false))// it will show true because ! operator negates the value of (true && false) which is false

//***********Typeof Operator**********//

console.log(typeof 3)// it will show number because 3 is of type (number)
console.log(typeof "saloni")// it will show string because "saloni" is of type (string)
console.log(typeof true)// it will show boolean because true is of type (boolean)
console.log(typeof undefined)// it will show undefined because undefined is of type (undefined)
console.log(typeof null)// it will show object because null is of type object (this is a bug in javascript)
console.log(typeof {})// it will show object because {} is of type (object
console.log(typeof [])// it will show object because [] is of type object (arrays are objects in javascript)
console.log(typeof function(){})// it will show function because function(){} is of type function
console.log(typeof NaN)// it will show number because NaN is of type number (Not a Number is still of type number)
//***********Comma Operator**********//
let x=1,y=2,z=3
let result=(x++,y++,z++)// it will increment all variables and return the last one
console.log(result)// it will show 3 because z++ is the last expression
console.log(x,y,z)// it will show 2 3 4 because all variables are incremented by 1

//***********Operator Precedence and Associativity**********//   

console.log(2+3*4)// it will show 14 because * has higher precedence than + so 3*4=12 and then 2+12=14
console.log((2+3)*4)// it will show 20 because () has highest precedence so 2+3=5 and then 5*4=20
console.log(2**3**2)// it will show 512 because ** is right associative so 3**2=9 and then 2**9=512
console.log(20-10-5)// it will show 5 because - has left to right associativity so 20-10=10 and then 10-5=5
//console.log(-2**2)// it will show error because unary - has lower precedence than ** so it is equivalent to -(2**2) which is invalid
console.log(-(2**2))// it will show -4 because ** has higher precedence than unary - so 2**2=4 and then -4
console.log(2+3*4**2)// it will show 50 because ** has highest precedence so 4**2=16 then * has next precedence so 3*16=48 and then + so 2+48=50

//***********Chaining of Comparison Operators**********//

console.log(3<5<7)// it will show true because 3<5 is true (1) and then 1<7 is true
console.log(7>5>3)// it will show false because 7>5 is true (1) and then 1>3 is false
console.log(3<5>2)// it will show false because 3<5 is true (1) and then 1>2 is false
console.log(5>3<7)// it will show true because 5>3 is true (1) and then 1<7 is true
console.log(3<=3<=3)// it will show true because 3<=3 is true (1) and then 1<=3 is true
console.log(3>=3>=3)// it will show false because 3>=3 is true (1) and then 1>=3 is false
console.log(2+2==4)// it will show true because 2+2=4 and then 4==4 is true
console.log(2+2===4)// it will show true because 2+2=4 and then 4===4 is true
console.log(2+2=="4")// it will show true because 2+2=4 and then 4=="4" is true (string is converted to number)
console.log(2+2==="4")// it will show false because 2+2=4 and then 4==="4" is false (no type conversion)

//***********Operator Overloading**********//

console.log(2+"3")// it will show "23" because + operator concatenates (string and number)
console.log("2"+3)// it will show "23" because + operator concatenates string and number
console.log("Hello"+" World")// it will show "Hello World" because + operator concatenates two strings
console.log(2*3)// it will show 6 because * operator multiplies two numbers
console.log("2"*3)// it will show 6 because * operator converts string to number and then multiplies
console.log(2*"3")// it will show 6 because * operator converts string to number and then multiplies
console.log("Hello"*3)// it will show NaN because * operator cannot convert string to number    
//***********Operator Side Effects**********//  
let p=5
console.log(p++)// it will show 5 because post increment operator returns the value before incrementing it
console.log(p)// it will show 6 because p is incremented by 1
let q=5
console.log(++q)// it will show 6 because pre increment operator increments the value first and then returns it
console.log(q)// it will show 6 because q is incremented by 1

//***********Type Coercion**********//

console.log(5+"")// it will show "5" because number is converted to string and then concatenated
console.log(""+5)// it will show "5" because number is converted to string and then concatenated
console.log(true+"")// it will show "true" because boolean is converted to string and then concatenated
console.log(""+true)// it will show "true" because boolean is converted to string and then concatenated
console.log(+"5")// it will show 5 because string is converted to number
console.log(+true)// it will show 1 because boolean is converted to number
console.log(+false)// it will show 0 because boolean is converted to number
console.log(Number("5"))// it will show 5 because string is converted to number using Number() function
console.log(Number(true))// it will show 1 because boolean is converted to number using Number() function
console.log(Number(false))// it will show 0 because boolean is converted to number using Number() function
console.log(String(5))// it will show "5" because number is converted to string using String() function
console.log(String(true))// it will show "true" because boolean is converted to string using String() function
console.log(String(false))// it will show "false" because boolean is converted to string using String() function
console.log(Boolean(1))// it will show true because 1 is converted to boolean using Boolean() function
console.log(Boolean(0))// it will show false because 0 is converted to boolean using Boolean() function
console.log(Boolean("saloni"))// it will show true because non-empty string is converted to boolean using Boolean() function
console.log(Boolean(""))// it will show false because empty string is converted to boolean using Boolean() function 
console.log(Boolean(null))// it will show false because null is converted to boolean using Boolean() function
console.log(Boolean(undefined))// it will show false because undefined is converted to boolean using Boolean() function
console.log(Boolean(NaN))// it will show false because NaN is converted to boolean using Boolean() function
//***********Falsy Values in JavaScript**********//
//The following values are considered falsy in JavaScript:
console.log(Boolean(0))// false
console.log(Boolean(""))// false
console.log(Boolean(null))// false
console.log(Boolean(undefined))// false
console.log(Boolean(NaN))// false
console.log(Boolean(false))// false
//All other values are considered truthy
console.log(Boolean(1))// true
console.log(Boolean("saloni"))// true
console.log(Boolean([]))// true
console.log(Boolean({}))// true
console.log(Boolean(function(){}))// true
//***********Truthy Values in JavaScript**********//
//The following values are considered truthy in JavaScript:
console.log(Boolean(1))// true  
console.log(Boolean(-1))// true
console.log(Boolean("saloni"))// true
console.log(Boolean([]))// true
console.log(Boolean({}))// true 
console.log(Boolean(function(){}))// true       
//All other values are considered falsy
console.log(Boolean(0))// false
console.log(Boolean(""))// false
console.log(Boolean(null))// false
console.log(Boolean(undefined))// false
console.log(Boolean(NaN))// false
console.log(Boolean(false))// false
//***********Summary**********//

//JavaScript has various operators that can be used to perform operations on values
//Operators have different precedence and associativity which determines the order of evaluation
//Type coercion occurs when operators are applied to values of different types
//Falsy values in JavaScript include 0, "", null, undefined, NaN, and false
//Truthy values in JavaScript include all values that are not falsy 
//Understanding operators and type coercion is important for writing correct and efficient JavaScript code
