// EVENTS FULL CLEAR
// Event kya hota hai?
// Jab user koi action kare — wo event hota hai.
// Examples:
// click
// input
// change
// submit
// keydown
// mouseover


// var buttun=document.getElementById("btn")
// buttun.addEventListener("click",function(){
//     console.log("Buttun Clicked")
// })

// var input=document.getElementById("nameInput")
// input.addEventListener("input",function(){
//     console.log(input.value)//Har typing pe console me value show hogi.
// })

// var form = document.getElementById("myForm")

// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     console.log("Form Submitted")
// })

// preventDefault() Kyu?
// Form normally:
// Page reload karta hai
// preventDefault():
// Reload stop karta hai

//preventDefault() Kyu?

//Keydown Event
// /Har key press pe console me key ka naam show hoga.

//Mouseover Event
// buttun.addEventListener("mouseover",function(){
//     console.log("Mouse aya")//Mouse button pe aate hi chalega
// })

// document.addEventListener("keydown",function(e){
//     console.log(e.key)
// })/

//=================================================================================

var heading = document.getElementById("title")
var button = document.getElementById("btn")

button.addEventListener("click",function(){
    heading.innerText="Frontend Developer"
    heading.innerText ="Frontend Developer Loading...."
    heading.style.color="White";
    heading.style.backgroundColor="Black"
})

//Input Event
var input = document.getElementById("nameInput")
var output = document.getElementById("output")

input.addEventListener("input",function(){
    output.innerText=input.value.toUpperCase()
    output.style.color="Blue"
})
// let li = document.createElement("li");
// li.innerText = "Task 1";

// list.appendChild(li);



//Element Create + Delete
var inputs = document.getElementById("taskInput");
var addbutton = document.getElementById("addBtn")
var lists = document.getElementById("list")


addbutton.addEventListener("click",function(){
    //// 1️⃣ naya item banao
    var li =document.createElement("li");
      // 2️⃣ usme text daalo
    li.innerText = inputs.value
  // 3️⃣ list me show karo
    lists.appendChild(li)

  // 4️⃣ delete behavior lagao (YAHAN LAGANA HAI)
li.addEventListener("click", function () {
  li.remove();
});
  // 5️⃣ input clear
    inputs.value=""
})


//========
// 1️⃣ value property (Form data lena)

// Input ka text kaise milta hai → ye hi real apps me use hota.

// input.value


// 👉 Tum use kar chuke ho, bas concept yaad:
// value = user ka data

// 2️⃣ classList (Style control via class)

// Inline style ki jagah class add/remove karte hain.

// li.classList.add("done");
// li.classList.remove("done");
// li.classList.toggle("done");


// 👉 toggle = on/off switch

// Todo app me: complete task mark karne ke liye.

// 3️⃣ preventDefault (Form control)

// Form submit hone par page reload rokna.

// event.preventDefault();


// 👉 Real form handling me use hoga.

// 4️⃣ this keyword (Event me current element)

// Event jis element par hua — usko refer karne ke liye.

// li.addEventListener("click", function () {
//   this.remove();
// });


// 👉 this = clicked item

// 1️⃣ Step 1: Add Task yaad karo
// 2️⃣ Step 2: Click on task → toggle .done

// Ye line-through aur color change show karega

// Hint:

// li.addEventListener("click", function() {
//   this.classList.toggle("done");
// });


// 3️⃣ Step 3: PreventDefault ka concept samajh lo → page reload nahi hoga
// 4️⃣ Step 4: Observe behavior → console me li.classList check karo