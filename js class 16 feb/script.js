// function main (myNewFunction){
//     console.log("Hi inside main")
//     myNewFunction()
// }
// function myNewFunction(){
// console.log("Callback Function")
// }
// main(myNewFunction)

// function main(num1,num2,callback){
//     return  callback(num1 , num2)
// }

// function add(num1,num2){
//     return num1 + num2
// }
// function sub(num1,num2){
//     return num1 - num2
// }
// console.log(main(4,5,sub))


//Callback Hell
//Jab callbacks ek dusre ke andar nest ho jayein → code mushkil ho jata hai.
//“Callback hell nested callbacks ki wajah se code ko hard to read aur maintain bana deta hai.”

// function func1(callback){
//     console.log("function 1")
//     callback();
// }
// function func2(callback){
//     console.log("function2")
//     callback();
// }
// function func3(callback){
//     console.log("function3")
//     callback();
// }
// func1(()=>{
//     func2(()=>{
//         func3(()=>{
//             console.log("All done")
//         })
//     })
// })

// function funcA(callback){
//     console.log("function A")
//     callback()
// }
// function funcB(callback){
//     console.log("function B")
//     callback()
// }    
// function funcC(callback){
//     console.log("function C")
//     callback()
// }
// funcA(()=>{
//     funcB(()=>{
//         funcC(()=>{
//             console.log("All are done")
//         })
//     })
// })



//Promise = future me milne wala result
//  Ya to kaam successful → resolve
//  Ya fail → reject

// “Promise asynchronous operation ka result represent karta hai jo future me resolve ya reject hota hai.”

// let value = new Promise (function(resolve,reject){
//     let success= true;

//     if(success){
//         resolve("Kaam hogya")
//     }
//     else{
//         reject("Error hogya")
//     }
// })
// value.then(function(result){
//     console.log(result)
// })

//Real Async Feel (setTimeout style)
// var value= new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Data agya")
//     },2000)
// })
// value.then(function(result){
//     console.log(result)
// })

// let name= new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Moiz Arain");
//     },1000)
// })
// name.then(function(result){
//     console.log(result)
// })

//Promise Chaining
// Multiple .then() ko sequence me chalana.
//  Pehla ka result → next then me jata hai
//  Nesting nahi hoti
// Clean readable code

// “Promise chaining me multiple then methods sequentially execute hote hain.”

// function step1(){
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve("Step 1 done"),1000)
//     })
// }
// function step2(message){
//     return new Promise(resolve => {
//         setTimeout(()=>resolve(message + "-> Step 2 done"),1000)
//     })
// }
// step1()
// .then(result=>step2(result))
// .then(final=>console.log(final))

// Output:
// Step 1 done → Step 2 done

//  Har step ka result next step ko milta hai
//  Callback hell khatam

function stepA(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("stepA done"),2000)
    })
}
function stepB(message){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(message + "->Step B done"),3000)
    })
}
stepA()
.then(result => stepB(result))
.then(final=>console.log(final))