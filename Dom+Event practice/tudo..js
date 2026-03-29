let form = document.getElementById("todoForm")
let input = document.getElementById("taskInput")
let button = document.getElementById("addBtn")
let delbtn = document.getElementById("clearBtn")
let list = document.getElementById("list")

// Prevent page reload on form submit
form.addEventListener("submit",function(event){
event.preventDefault() // preventDefault concept
})

//Add Task
button.addEventListener("click",function(){
    if(input.value===" ") return; // empty task na ho

    let li= document.createElement("li")
li.innerText= input.value;
li.style.color = "green";
li.style.fontSize = "20px";

  // Toggle complete / line-through
li.addEventListener("click",function(){
    this.classList.toggle("done");
})

delbtn.style.marginLeft = "10px";
delbtn.style.backgroundColor = "black";
delbtn.style.color = "white";


list.appendChild(li)
input.value=""
})

//// Clear All Tasks
delbtn.addEventListener("click",function(){  //list.innerHTML = ""  list ke andar jo bhi hai → sab remove
    list.innerHTML=""
})