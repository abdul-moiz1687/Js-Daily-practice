"use strict";
var sname = "Hello, TypeScript!";
console.log(sname);
//sirf text aur string ke liye use hota hai.
var sage = 25;
console.log(sage);
//sirf number allowed
//Boolean true ya false ke liye use hota hai.
var isLightOn = true;
console.log(isLightOn);
//real example
var isStudent = true;
var hasPassed = false;
console.log("Is the student enrolled? " + isStudent);
console.log("Has the student passed? " + hasPassed);
var isGameOver = false;
console.log("Is the game over? " + isGameOver);
isGameOver = true;
console.log("Is the game over? " + isGameOver);
var isLoggedIn = false;
console.log("Is the user logged in? " + isLoggedIn);
isLoggedIn = true;
console.log("Is the user logged in? " + isLoggedIn);
var isRainy = false;
console.log("Is it rainy today? " + isRainy);
isRainy = true;
console.log("Is it rainy today? " + isRainy);
// //Function
// function adds(a:number,b:number):number{
//     return a+b;
// }
// console.log("The sum is: " + adds(5, 10));
// function greet(name:string):string{
//     return "Hello," + name + "!";
// }
// console.log(greet("Moiz"));
// // ❌ Common mistake
// // function test(a: number, b: number): void {
// //   return a + b; // ❌ error
// // }
// // 👉 kyun?
// // → void ka matlab: kuch return nahi karega
// //Void example
// function showMessage(message:string):void{
//     console.log("Message: " + message);
// }
// showMessage("This is a void function example.");
// //two type functions
// //return function
// function multiply(a:number,b:number):number{
//     return a*b;
// }
// console.log("The product is: " + multiply(5, 10));
// //sirf print karne wali function
// function printMsg():void{
//     console.log("Message: This is a print message function example.");
// }
// printMsg();
// function add(a:number,b:number):number{
//     return a+b;
// }
// function greet(name:string):string{
//     return "Hello," + name + "!";
// }
// console.log("The sum is: " + add(5, 10));
// console.log(greet("Moiz"));
// function substract(a:number,b:number):number{
//     return a-b;
// }
// console.log("The difference is: " + substract(10, 5));
//Arrays & Objects
//Part 1: Arrays
// Array kya hota hai?
// 👉 Array = ek box jisme multiple values hoti hain
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits: " + fruits.join(", "));
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
let numbers = [10, 20, 30];
console.log("Numbers: " + numbers.join(", "));
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
//Objects
// Object kya hota hai?
// 👉 Object = ek box jisme key-value pairs hote hain
let user = {
    name: "Moiz",
    age: 18,
    isActive: true
};
console.log("User Name: " + user.name);
console.log("User Age: " + user.age);
console.log("Is User Active? " + user.isActive);
//Practice 2.Objects
let car = {
    brand: "Toyota",
    model: 2022
};
console.log("Car Brand:", car.brand);
console.log("Car Model:", car.model);
//Example Array + Object
let users = [
    { name: "Moiz", age: 18, mark: 85 },
    { name: "Ali", age: 19, mark: 90 }
];
console.log("User name is " + users[0].name + "and his age is " + users[0].age + "and his mark is " + users[0].mark);
console.log("User name is " + users[1].name + "and his age is " + users[1].age + "and his mark is " + users[1].mark);
let bike = {
    bname: "unique",
    bmodel: 2024,
    bactive: true
};
console.log("Bike", bike);
let bike2 = {
    bname: "Honda",
    bmodel: 2023,
    bactive: true
};
console.log("Bike2", bike2);
let user1 = {
    name: "Moiz",
    age: 18
};
let user2 = {
    name: "Ali",
    age: 19
};
console.log("User1 Name: " + user1.name + ", Age: " + user1.age);
console.log("User2 Name: " + user2.name + ", Age: " + user2.age);
//Real use
// Interface/Type use hota hai:
// APIs me
// React project me
// large apps me
// clean code ke liye
//Topic 5: DOM (HTML + TypeScript connect) 
//DOM kya hota hai?
// 👉 DOM = Document Object Model
// 👉 ek tree structure jisme HTML elements hote hain
//HTML element ko select karna
function changeText() {
    let title = document.getElementById("title");
    title.innerText = "Hi Moiz!";
}
function changeMsg() {
    let msg = document.getElementById("msg");
    msg.innerText = "Welcome to TypeScript!";
    document.body.style.color = "red";
}
//Primitive type
let name = "Moiz";
let age = 18;
let isActive = true;
let uname = "Moiz";
let uage = 18;
const student1 = {
    name: "Moiz",
    age: 18,
    isPassed: true,
};
function showStudentInfo(student) {
    console.log("Student Name: " + student.name);
    console.log("Student Age: " + student.age);
    console.log("Has the student passed? " + student.isPassed);
}
showStudentInfo(student1);
