//Local storage
// Save data
// Get data
// Remove data
// Clear data

//  Event + LocalStorage
// button click
// ↓
// data save
// ↓
// page reload
// ↓
// data wapas show
//ye todos app ma hota ha
//LocalStorage browser ka permanent storage hai.
// page reload
// ↓
// data delete nahi hota

//save data 
// localStorage.setItem("name","Moiz")
// let data = localStorage.getItem("name")
// console.log(data)
//remove item
//localStorage.removeItem("name")
//All delete
//localStorage.clear()

// Todo app
// ↓
// tasks save
// ↓
// page reload
// ↓
// tasks wapas show

// localStorage.setItem("course","SMIT Web Dev")
// let uData = localStorage.getItem("course")
// console.log(uData)
// localStorage.removeItem("course")
// localStorage.clear()

//JSON.stringify()
//Ye object ko string me convert karta hai.

//Object
// let user ={
//     name:"Abdul Moiz",
//     age:20
// }
//stringify
//localStorage.setItem("user",JSON.stringify(user))
//JSON.parse
//Jab data nikalo to use karte hain:
//  let data = localStorage.getItem("user")
//  let getUser = JSON.parse(data)
//  console.log(getUser.name)

//  object
// ↓
// JSON.stringify()
// ↓
// localStorage save
// ↓
// localStorage get
// ↓
// JSON.parse()
// ↓
// object wapas

// let student ={
//     name:"Moiz",
//     course:"Web dev"
// }
// localStorage.setItem("student", JSON.stringify(student))
// let data = localStorage.getItem("student")
// let sData =JSON.parse(data)
// console.log(sData.name)

//Ab sabse important LocalStorage concept
// Array of Objects save karna
// Real projects me single object nahi hota.
// Example:
// Todo App
// Cart Items
// Saved Users
// Posts

//sab array of objects hotay hain.

// let students = [
// {name:"Moiz",course:"Web deb"},
// {name:"Ali",course:"UI|UX"}
// ]
// localStorage.setItem("students",JSON.stringify(students))

//data wapas lana
// let data = localStorage.getItem("students")
// let arr = JSON.parse(data)
// console.log(arr)
// console.log(arr[0].name)

//Real Use Case
//Todo App
// User task add karta
// ↓
// task array me jata
// ↓
// array localStorage me save
// ↓
// page reload
// ↓
// tasks wapas show

// let users = [
// {name:"Ali",age:20},
// {name:"Sara",age:22},
// {name:"Ahmed",age:19}
// ]
// localStorage.setItem("users",JSON.stringify(users))
// let uData = localStorage.getItem("users")
// let uArr= JSON.parse(uData)
// uArr.forEach(function(users){
//     console.log("name " + users.name + " age " + users.age )
// })


//Page Reload par LocalStorage data load karna
// Real apps me kya hota hai:
// User task add karta
// ↓
// task localStorage me save
// ↓
// page reload
// ↓
// tasks automatically show

//Agar ye nahi aata to Todo App kaam nahi karta

// let div = document.getElementById("box")
// let data = localStorage.getItem("users")
// let user = JSON.parse(data)
// user.forEach(function(users){
//     let p = document.createElement("p")
//     p.innerText = users.name + "-" + users.age
//     div.appendChild(p)
// })


// let div = document.getElementById("students")
// let data = localStorage.getItem("users")
// let user = JSON.parse(data)
// user.forEach(function(users){
//     let p = document.createElement("p")
//     p.innerText = users.name + " - " + users.age
//     div.appendChild(p)
// })


//Array me NEW data add karna
// user task add karta
// ↓
// array update hota
// ↓
// localStorage update hota
// ↓
// page reload par sab show

// Concept
// LocalStorage me directly push nahi kar sakte.
// Isliye process hota hai:

// 1 data get karo
// 2 JSON.parse karo
// 3 array me push karo
// 4 dobara stringify karo
// 5 localStorage update karo

// uArr.push({name:"Hunnan",age:25})
// localStorage.setItem("users",JSON.stringify(uArr))

// let users=
//    [ {name:"Ali",age:20},
// {name:"Sara",age:22},
// {name:"Ahmed",age:19}
// ]

//  localStorage.setItem("users",JSON.stringify(users))
// let uData = localStorage.getItem("users")
// let  uArr = JSON.parse(uData)
// uArr.forEach(function(users){
//     console.log("name:" + users.name + "age:" + users.age)
// })

// uArr.push({name:"Bilal",age:23})
// localStorage.setItem("users",JSON.stringify(uArr))

//=========================================================================

