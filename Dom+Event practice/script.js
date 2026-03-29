//dom kiya hota ?
//DOM (Document Object Model) HTML ka tree structure hota hai jise JavaScript access
//  aur modify kar sakti hai.
// const tittle=document.getElementById("tittle")
// const btn=document.getElementById("btn")
//getElementById = element pakarna

//Content Change
//tittle.innerText="Moiz Developer"
//innerText = text change
//console.log(tittle)

//Add Event 
//btn.addEventListener("click",function(){
   // tittle.innerText="Buttun Clicked"
// })
// document.body.style.background="Aqua"
//  ================================================================================


// var heading=document.getElementById("heading")// single element
// var para=document.querySelector(".info")// first match
// var allParas=document.querySelectorAll(".info")// multiple elements

// //PART 3 — Content Change
// heading.innerText="New Heading"
// para.innerHTML="<b>Bold text added!</b>"

// //PART 3 — Content Change
// heading.style.color="Blue"
// heading.style.fontSize="30px"
// para.style.backgroundColor="Red"

// //Create & Remove Elements
// var newP=document.createElement("p")
// newP.innerText="Task added successfully!"

// document.body.appendChild(newP)
//  // Remove element on button click
// document.getElementById("btn").addEventListener("click",()=>{
//    newP.remove()
// // newP.style.backgroundColor="aqua"
// })

//==================================================================================

var heading = document.getElementById("title")
var button = document.getElementById("btn")

//text change 
heading.innerText="Frontend-Developer"

//Style change 
heading.style.color="Blue";
heading.style.background="lightgray";
heading.style.padding="10px";

console.log(heading.style)