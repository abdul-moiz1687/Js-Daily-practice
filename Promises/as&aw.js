console.log("hello Js")
//1️⃣ Async / Await kya hota hai?
//Async/Await Promise ko simple tareeke se likhne ka method hai.
//async → function ko Promise bana deta hai
//await → Promise ka result ka wait karta hai
//pehla ma likhta tha 
// fetch(url)
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     console.log(data)
// })

//Ab same kaam Async/Await se:
// async function getUser(){
// let res= await fetch("https://jsonplaceholder.typicode.com/users")
// let data = await res.json()
// console.log(data)
// }
// getUser()

// Real Life Use
// Real projects me developers zyada tar Async/Await use karte hain.
// Kyun?
// Code clean aur readable ho jata hai.
// Compare karo:

//Promise 
// .then()
// .then()
// .then()

//asyn \ await
// await
// await
// await

// async function getUsers(){
// let res = await fetch("https://jsonplaceholder.typicode.com/users")
// let data = await res.json()
// data.forEach(function(user){
//     console.log(user.name)
// })
// }
// getUsers()

// async function getUser(){
//     let respone = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await respone.json()
//     data.forEach(function(post){
//         console.log(post.title)
//     })
// }
// getUser()

//Important rule
//await sirf async function ke andar use hota hai.
//let data = await fetch(url)
//async function getData(){
//    let data = await fetch(url)
// }

//Ab ek bohat important concept
//Real world me API kabhi fail bhi ho sakti hai.
// Internet problem
// Server down
// Wrong URL
//Isliye Async/Await ke sath error handling use hoti hai.

// async function getUser(){
//     try{
//         let res= await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data = await res.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("This is the error ",error)
//     }
// }
// getUser()

// async function getUsers(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data =  await response.json()
//         console.log(data)
//     }
//     catch(error){
//     console.log("This is the error",error)
// }
// }
// getUsers()


//Ek chhota professional improvement
// Real projects me developers response status bhi check karte hain.
// Example:

// async function getUsers(){
//     try{  // network error handle krta ha
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     if(!response.ok){     //response.ok HTTP status check karta hai
//         throw new Error ("Net response not Ok") // custum error message banata ha
//     }
//     let data = await response.json()
// console.log(data)
// }
// catch(error){
//     console.log(error)
// }
// }
// getUsers()