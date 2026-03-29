//Promise Chaining kya hoti hai?
//Kabhi kabhi ek kaam ke baad dusra kaam karna hota hai.
//Login, User data lao ,User ke posts lao

//Step 1 → Step 2 → Step 3
//Promises me ye kaam .then() chain se hota hai.

// simple example
// let promise = new Promise (function(resolve,reject){
//     setTimeout(function(num){
//         resolve(10)
//     },1000)
// })
// promise
// .then(function(num){
//     console.log("step: 1" , num)
//     return num * 2
// })
// .then(function(result){
//     console.log("step:2 ",result)
//     return result * 2
// })
// .then(function(finalResult){
//     console.log("step: 3",finalResult)
// })

// Important Rule (Golden Rule)

// .then() value return karta hai jo next .then() ko milti hai.

// Matlab:

// then 1 → value return → then 2 → value return → then 3

// Example:

// 10
// ↓
// 20
// ↓
// 40

// let promise = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve(5)
//     },2000)
// })
// promise
// .then(function(number){
//     console.log("step:1 ",number)
//     return number * 2
// })
// .then(function(result){
//     console.log("step : 2",result)
//     return result + 10 
// })
// .then(function(finalResult){
//     console.log("final result:", finalResult)
// })
// .catch(function(error){
//     console.log(error)
// })

// let promise = new Promise ( function ( resolve , reject ){
//     setTimeout(function(){
//         resolve(4)
//     },2000)
// })
// .then(function(num){
//     let square = num * num ;
//     console.log("square : ",square)
//     return square
// })
// .then(function(result){
//  let add = result + 6 
//  console.log("add",add)
//  return add
// })
// .then(function(final){
//     let multiply = final * 5 
//     console.log("multiply ", multiply)
//     return multiply
// })

let myPromise = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve(3)
    },3000)

})
myPromise
.then(function(newNum){
    let squareNum = newNum * newNum
    console.log("squareNum:",squareNum)
    return squareNum
})
.then (function(addResult){
    let addNum= addResult + 5
    console.log("addResult",addNum)
   return addNum
})
.then (function(saquareFinal){
    let squareNum = saquareFinal * 2
    console.log("squareNum:",squareNum)
    return squareNum
})