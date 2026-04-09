var sname :string = "Hello, TypeScript!";
console.log(sname);
//sirf text aur string ke liye use hota hai.

var sage :number =25;
console.log(sage)
//sirf number allowed

//Boolean true ya false ke liye use hota hai.
var isLightOn : boolean = true;
console.log(isLightOn)


//real example
var isStudent :boolean=true;
var hasPassed :boolean=false;
console.log("Is the student enrolled? " + isStudent);
console.log("Has the student passed? " + hasPassed);

var isGameOver :boolean=false;
console.log("Is the game over? " + isGameOver);
isGameOver=true;
console.log("Is the game over? " + isGameOver);

var isLoggedIn :boolean=false;
console.log("Is the user logged in? " + isLoggedIn);
isLoggedIn=true;
console.log("Is the user logged in? " + isLoggedIn);

var isRainy :boolean=false;
console.log("Is it rainy today? " + isRainy);
isRainy=true;
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

let fruits: string[]=["Apple","Banana","Mango"];
console.log("Fruits: " + fruits.join(", "));
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

let numbers:number[]=[10,20,30];
console.log("Numbers: " + numbers.join(", "));
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Objects
// Object kya hota hai?
// 👉 Object = ek box jisme key-value pairs hote hain
let user:{name:string,age:number,isActive:boolean}={
    name:"Moiz",
    age:18,
    isActive:true
};
console.log("User Name: " + user.name);
console.log("User Age: " + user.age);
console.log("Is User Active? " + user.isActive);


//Practice 2.Objects

let car:{
    brand:string,
   model:number
}={
    brand:"Toyota",
    model:2022
}
console.log("Car Brand:",car.brand);
console.log("Car Model:",car.model);


//Example Array + Object
let users:{
    name:string,
    age:number,
    mark:number
}[]=[
    {name:"Moiz",age:18,mark:85},
    {name:"Ali",age:19,mark:90}
]
console.log("User name is "+users[0].name+"and his age is "+users[0].age+ "and his mark is "+users[0].mark);
console.log("User name is "+users[1].name+"and his age is "+users[1].age+ "and his mark is "+users[1].mark);

///Topic 4: Type & Interface
//Type kya hota hai?
//  Type = ek custom data type jo hum define kar sakte hain
// Problem kya hai?

// Tumne object likha:
// let bike: {bname: string, bmodel: number, bactive: boolean} = {
//   bname: "uniq",
//   bmodel: 2024,
//   bactive: true
// };
//  Problem:
// baar baar same type likhna padta hai 
// code messy ho jata hai

//Solution:Type Alias
type bikeType={
    bname:string,
    bmodel:number,
    bactive:boolean
}
let bike:bikeType={
    bname:"unique",
    bmodel:2024,
    bactive:true
}
console.log("Bike",bike)

//Solution 2: Interface
interface Bike{
    bname:string,
    bmodel:number,
    bactive:boolean
}
let bike2:Bike={
    bname:"Honda",
    bmodel:2023,
    bactive:true
}
console.log("Bike2",bike2)

// | Type          | Interface       |
// | ------------- | --------------- |
// | simple use    | mostly objects  |
// | flexible      | clean structure |
// | chota project | bada project    |


//real life example
interface Users{
    name:string,
    age:number
}
let user1:Users={
    name:"Moiz",
    age:18
}
let user2:Users={
    name:"Ali",
    age:19
}
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

function changeText(){
    let title=document.getElementById("title") as HTMLElement;
    title.innerText="Hi Moiz!";
    
}

function changeMsg():void{
    let msg=document.getElementById("msg")as HTMLElement;
    msg.innerText="Welcome to TypeScript!";
    document.body.style.color="red";
}

//Primitive type
let name :string="Moiz";
let age :number=18;
let isActive :boolean=true;

//Step 2: Type Alias seekho (type)
type Uname=string;
type Uage=number;
 let uname:Uname="Moiz";
 let uage:Uage=18;

 //Step 3: Interface seekho (interface)
 type status = "active" | "inactive";
 interface User{
    name:string;
    age:number;
    status:status;
 }

 type Name = string;
 interface Student{
    name:Name;
    age:number;
    isPassed:boolean;
 }
const student1:Student={
    name:"Moiz",
    age:18,
    isPassed:true,
}
function showStudentInfo(student:Student):void{
    console.log("Student Name: " + student.name);
    console.log("Student Age: " + student.age);
    console.log("Has the student passed? " + student.isPassed);
}
showStudentInfo(student1);