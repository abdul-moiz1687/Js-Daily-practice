// | State                | Meaning                 |
// | -------------------- | ----------------------- |
// | Pending              | Abhi kaam chal raha hai |
// | Resolved (Fulfilled) | Kaam successful ho gaya |
// | Rejected             | Kaam fail ho gaya       |

// simple promise
 
// let myPromise = new Promise(function(resolve, reject) {
//     let success = true

//     if(success){
//         resolve("Kaam hogya")
//     }
//     else{
//        reject("Kaam fail hogya ")
//     }
// })

// Promise ka result kaise milta hai?
// Promise ka result lene ke liye .then() aur .catch() use hota hai.

// myPromise
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })

//Real Async Example
//Ab Promise ko setTimeout ke sath use karte hain.

// let myPromise = new Promise (function(resolve,reject){
//    setTimeout(function(){
//     resolve("Data mill gya")
//    },2000)
// })
// myPromise.then(function(data){
//     console.log(data)
// })

//Task 1
// let number = 10;
// let myPromise= new Promise (function(resolve,reject){
//     let ans= number>5
//     if (ans){
// resolve("Kaam hogya")
//     }
//     else{
//         reject("Kaam nhi howa")
//     }
// })

// myPromise
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })

//Task 2
let age = 20;
let myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(age>18){
            resolve("You can vote ")
        }
        else{
            ("You cannot vote")
        }
    })
})
myPromise
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})