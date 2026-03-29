// Promise me Promise return karna
// Ye concept bohat important hai kyun ke:
// Fetch API
// Async/Await
// dono Promises return karte hain.

// Concept (Simple Roman Urdu)
// Abhi tak tumne .then() me value return ki thi.
// Example:
// return num * 2
// Lekin .then() Promise bhi return kar sakta hai.
// Matlab:
// .then()
// new Promise()
// next .then()

// function step1(){
//     return new Promise (function (resolve,reject){
//         setTimeout(function(){
//             resolve(10)
//         },2000)
//     })
// }
// step1()

// .then(function(num){
//     console.log("step:",num)
//     return new Promise (function(resolve,reject){
//         resolve(num * 2)
//     })
// })
// .then(function(result){
//     console.log("final result:",result)
// })

//task
// function getNumber(){
//     return  new Promise (function(resolve,reject){
//         setTimeout(function(){
//             resolve(6)
//         },2000)
//     })
// }
// getNumber()
// .then(function(num){
//       console.log("step1:",num)
//       return new Promise(function(resolve,reject){
//      resolve (num*2)
//       })
// })
// .then(function(result1){
//     console.log("step2:",result1)
//     return new Promise(function(resolve,reject){
//  resolve (result1 + 8) 
//     })
// })
// .then(function(result2){
//     console.log("step3:",result2)
//      return new Promise(function(resolve,reject){
//     resolve (result2 * 3) 
//      })
// })
// .then(function(finalResult){
//     console.log(finalResult)
// })

// function getNumber(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(6)
//         },2000)
//     })
// }

// getNumber()

// .then(function(num){
//     console.log("step1:",num)
//     return num * 2
// })

// .then(function(result1){
//     console.log("step2:",result1)
//     return result1 + 8
// })

// .then(function(result2){
//     console.log("step3:",result2)
//     return result2 * 3
// })

// .then(function(finalResult){
//     console.log(finalResult)
// })

//Best Practice 
function getNumber(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(6)
        },2000)
    })
}

getNumber()
.then(function(num){
    console.log("step:1",num)
    return num*2
})
.then(function(result1){
  console.log("step:2",result1)
  return result1+8
})
.then(function(result2){
    console.log("step:3",result2)
    return result2*3
})
.then(function(finalResult){
    console.log("FinalResult",finalResult)
})