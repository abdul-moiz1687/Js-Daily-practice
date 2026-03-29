console.log("hello Js")
//Fetch API kya hoti hai?
//Fetch API ka kaam hai server se data lana.
//Example:
// Tum kisi website par jao:
// Instagram
// Facebook
// Weather App
// Shopping Website
// Wahan jo:
// posts
// users
// products
// comments
// dikhte hain wo server se aate hain.
// Aur JavaScript unko lane ke liye Fetch API use karti hai.

//2 Important baat
//fetch() Promise return karta hai.
// fetch()
// ↓
// Promise
// ↓
// .then()

//Sabse Simple Fetch Example
//Ye real API hai jahan se fake data milta hai.
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     console.log(response)
// })

//Problem kya hai?
//Server data JSON format me bhejta hai.
//{
// name: "Leanne Graham",
// email: "leanne@gmail.com"
// }
// Lekin fetch() directly JSON nahi deta.
// Pehle usko convert karna hota hai.

// 5️⃣ JSON me convert karna
//uske lya
//response.json()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data)
// })

//6️⃣ Flow samjho
// fetch()
// ↓
// server response
// ↓
// response.json()
// ↓
// actual data
//Isliye 2 then lagte hain.

//7️⃣ Real Use Case
// Example:
// Tum users show karna chahte ho website par.

// fetch users
// ↓
// data mil gaya
// ↓
// DOM me show
//Ye har real web app me hota hai.

//Task

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(myTask){
//     return myTask.json()
// })
// .then(function(uData){
//     console.log(uData)
// })

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     console.log(data[0].name)
//   console.log(data[0].email)
// })

//Next Step:-
//Fetch + Loop
// Lekin API me 10 users hote hain.

// Real website me kya hota hai?

// API data
// ↓
// loop
// ↓
// sab users show

// Concept
// API se data aata hai array form me.
// Example:
// data = [
//  {name:"Ali"},
//  {name:"Ahmed"},
//  {name:"Sara"}
// ]
// Isliye hume loop lagana padta hai.

//Example
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     data.forEach(function(user){
//         console.log(user.name + " & " +  user.email)
//     });
// })

//Flow
// fetch()
// ↓
// response
// ↓
// json()
// ↓
// data (array)
// ↓
// loop
// ↓
// each user

//Fetch + DOM
// Pehla ma hum console ma print krta tha 
// API
// ↓
// Data
// ↓
// Loop
// ↓
// HTML create
// ↓
// Screen par show
//Isko cheez ko dom + fetch kehta hn 

// let div = document.getElementById("users")

// fetch("https://jsonplaceholder.typicode.com/users")

// .then(function(response){
//    return response.json()
// })
// .then(function(data){
//     data.forEach(function(user){
//         let p = document.createElement("p")
//         p.innerText=" uId " + user.id + "  " +  user.name + " - " + user.email
//         //p.innerText = `uId ${user.id} ${user.name} - ${user.email}`
//         div.appendChild(p)
//     })
// })

// let ul = document.getElementById("users")
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     data.forEach(function(user){
// let li = document.createElement("li")
// li.innerText = user.name + "  " + user.email
// ul.appendChild(li)
//     })
// })