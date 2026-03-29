// //Callback Function
// “Callback wo function hai jo kisi dusre function me argument ke taur par pass kiya jata hai aur baad me execute hota hai.”

// function greet(name){
//     console.log("Hello " + name)
// }
// function processUser(callback){
//     callback("Moiz")
// }
// processUser(greet)
//greet ko argument me diya
//processUser ne baad me call kiya

// function showMessage(msg) {
//   console.log(msg);
// }
// function run(callback) {
//   callback("JS strong ho raha hai");
// }
// run(showMessage)

//Call 
// call = function ko turant call karte hain
// this ko set kar sakte ho
// Arguments comma se pass hote hain

//“call function ko immediately call karta hai aur this set kar sakta hai.”

// let user= {
//     name:"Ali"
// }
// function greet(city){
//     console.log(this.name + " from " + city)
// }
// greet.call(user,"Karachi");

// let stud={
//     name:"Moiz"
// }
// function sayHi(city){
//     console.log(this.name + " from " + city)
// }
// sayHi.call(stud,"Karachi")

//Apply
// apply = function turant call hota hai
// this set kar sakte ho
// arguments array me pass hote hain

//apply function ko immediately call karta hai aur arguments array me leta hai.”

// let user={
//     name:"Moiz"
// }
// function greet(city,country){
//     console.log(this.name + " from " + city + country)
// }
// greet.apply(user,["Karachi "," Pakistan"])

// let stud={
//     name:"Moiz"
// }
// function sayHi(city){
//     console.log(this.name + " from " + city)
// }
// sayHi.call(stud,["Karachi"])

//Bind
// bind = function turant call nahi hota
// bind → naya function copy banata hai
// Baad me call karte hain

//“bind function ka naya version banata hai jise baad me call kiya jata hai.”

// let user ={
//     name:"Moiz"
// }
// function greet(city){
//     console.log(this.name + " from " + city )
// }

// //// bind → copy bana
// let greetUser = greet.bind(user)

// greetUser("karachi")

// let stud={
//     name:"Moiz"
// }
// function sayHi(city){
//     console.log(this.name + " from " + city)
// }
// let sayHiUser=sayHi.bind(stud)

// sayHiUser("Lahore")


//closure
// Closure = inner function ko outer function ka data yaad rehta hai.
// “Closure me inner function outer function ke variables ko access karta rehta hai, chahe outer function finish ho jaye.”

// function outer(){
//     let count= 0;

//     function inner(){
//          count ++;
//         console.log(count)
//     }
//     return inner;
// }
// let counter = outer();

// counter()
// counter()
// counter()

// outer run hua
// count variable bana
// inner ne count ko “remember” kar liya
// outer khatam ho gaya
// phir bhi inner ko count yaad hai
//  Yehi closure hai.


// function outer(){
//     let score = 110;

//     function inner(){
//         score ++ ;
//         console.log(score)
//     }
//     return inner;
// }
// let scores= outer()

// scores()
// scores()
// scores()

//IIFE (Immediately Invoked Function Expression)
//IIFE = function jo banta hi turant run ho jata hai.
//“ IIFE wo function hai jo define hote hi turant execute ho jata hai.”

// (function(){
//     console.log("run hogya")
// })()

// Function banaya
//  Last () ne turant call kar diya
// Simple Use Case
// Temporary kaam karna
// Variables ko global se bachana
// Ek baar run hone wali logic

(function(name){
    console.log("Hello " + name)
})(" Moiz")