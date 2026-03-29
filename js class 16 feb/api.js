//Fetch API basic
// fetch = internet se data lena
//  Server se response aata hai
//  Response ko JSON me convert karte hain
//  Data use karte hain

// “Fetch API server se data lene ke liye use hoti hai aur promise return karti hai.”

// function fetchData(){
//     fetch("https://dummyjson.com/products")
//     .then(res=>res.json())
//     .then(data=>console.log(data.products))
// }
// fetchData()

// fetch → request bheji
//  .then(res => res.json()) → JSON bana
// .then(data => ...) → data use kiya

// function fetchData(){
//     fetch("https://dummyjson.com/products")
//     .then(res=> res.json())
//     .then(data=>{
//         console.log(data.products[0].title)
//         console.log(data.products[0].thumbnail)
//         console.log(data.products[0].description)
//     })
// }
// fetchData()
//===========================================================================

//Step 2 — Fetch with async / await

// async function → andar await use hota hai
// await → promise ka result ka wait
// try/catch → error handle
// “async/await asynchronous code ko synchronous jaisa readable banata hai.”

// async function fetchApi(){
//   try{
//     const res= await fetch("https://dummyjson.com/products");
// const data = await res.json();

//   console.log(data.products)
// console.log(data.products[0].title)
//    }   catch(error){
// console.log("error in API",error.message)
//   }
// }
// fetchApi()

//     Promise vs Async/Await (class clarity)

// Promise style:

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data));

// Async/Await style:

// const res = await fetch(url);
// const data = await res.json();

//  Same kaam
// async/await readable


// async function asynFetch(){
//     try{  
//     const res = await fetch("https://dummyjson.com/products")
//     const data = await res.json()
//  console.log(data.products)
//  console.log(data.products[0].description)
// }
// catch(error){
//     console.log("error in API",error.message)
// }
// }
// asynFetch()

//======================================================================

// setTimeout + Event Loop
// JavaScript single-threaded hoti hai.
// Asynchronous kaam (setTimeout, fetch) baad me run hote hain.
// setTimeout ka code delay ke baad queue me jata hai
//  Call stack free hota hai to run hota hai

// “setTimeout asynchronous hota hai aur event loop ke through execute hota hai.”

// console.log("First")
// setTimeout(()=>{
//     console.log("second (after Delay)")
// },2000)
// console.log("Third")

// console.log("Abdul")

// setTimeout(()=>{
//     console.log("Arain")
// },3000)
// console.log("Moiz")

// ======================================================================

//this keyword
// this us object ko refer karta hai jahan se function call hua ho.

// “this current execution context ko refer karta hai.”
//Global Scope
//console.log(this);

//Object Method
// var obj={
//     name:"Moiz",
//     show:function(){
//         console.log(this.name)
//     }
// }
// obj.show()

//Normal Function (non-strict)
// function test(){
//     console.log(this)
// }
// test()

//Strict Mode
"Strict mode"
function test(){
    console.log(this)
}
test()

// this object ko refer karta hai jahan se function call hua
//  object method me this = object
// normal function me this = window (strict me undefined)

//Task 1
function showName(){
    console.log("Moiz Arain")
}
setTimeout(showName,4000)

//Task 2
// let dataPromise = new Promise ((resolve,reject)=>{
//     let sucess = true;

//     if(sucess){
//         console.log("Data mil gya")
//     }
//     else{
//         console.log("Data nhi mila")
//     }
// })
// dataPromise
// .then(res=> console.log(res))
// .catch(error=>console.log(error))

//Task 3
fetch("https://dummyjson.com/products")
.then(res=> res.json())
.then(data=>{
    data.products.forEach(product => {
        console.log(product.title)
        console.log(product.thumbnail)
    });
})
.catch(err=>console.log("error",err))