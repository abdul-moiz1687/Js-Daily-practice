//opps kia hota hn
//“OOP ek programming style hai jahan hum classes aur objects use karke code ko reusable aur easy banate hain”

//opps sa pehla problem kia thi?
// before OOP
// code hard to read
// hard to reusable
// extend issues
// hard to maintain
    
//mtlb
// OOP ka matlab hai Objects Oriented Programming
// jisme hum objects aur classes ka use karte hain
// jo code ko reusable aur easy banata hai

//Real life example
//har car mein engine, wheels, aur doors hote hain
//hum ek class bana sakte hain Car ke naam se
//us class mein hum properties define kar sakte hain jaise engine, wheels, aur doors
//phir hum us class se objects bana sakte hain jaise car1, car2, etc.
//har car object apni properties aur methods ke sath aayega

// sir ko answer deny ka lya 
//“OOP ek programming paradigm hai jahan hum classes aur objects use karte hain. Is se code reusable, readable aur maintainable hota hai.
//  Iske 4 pillars hain: abstraction, encapsulation, inheritance aur polymorphism.”

// A E I P
// A → Abstraction
// E → Encapsulation
// I → Inheritance
// P → Polymorphism

//Pillar 1: Abstraction
//Abstraction = andar ka complex logic chhupa kar sirf simple use dena
//Real life example
// Socho tum:
// 📱 Mobile use karte ho
// 👉 Tum:
// call karte ho
// message bhejte ho
// ❗ Lekin tumhein nahi pata:
// signal kaise ja raha
// network kaise kaam kar raha
// 👉 Ye hi hai Abstraction


//code  example of abstraction
// class Car{
//     constructor(model){
//         this.model = model
//     }
//     start(){
//         console.log("Car is starting 🚗")
//     }
// }
// const C1 = new Car("Toyota")
// C1.start() // Car is starting

// Tum bas start() call karte ho
//  Engine kaise start hua? → hidden
//  Ye hi abstraction hai

//Easy yaad trick 
// Abstraction = Complex logic chhupa do, sirf simple use dena

//Galat samajhne wali baat
//Abstraction ka matlab ye nahi hai ki hum code ko completely chhupa denge
//Hum sirf complex logic ko chhupa kar simple interface denge

//sir ka answer
//Abstraction ek programming concept hai jisme hum complex logic ko chhupa kar sirf simple
//  interface provide karte hain. Is se code ko use karna easy ho jata hai aur unnecessary
//  details se bach sakte hain. Abstraction ke 2 types hote hain: data abstraction aur 
// control abstraction. Data abstraction mein hum data ko chhupa kar sirf necessary information 
// provide karte hain, jabki control abstraction mein hum complex logic ko chhupa kar simple methods provide
//  karte hain.

//practice
// function calculateArea(){
//     //complex logic to calculate area
//     console.log("Area is calculated")
// }
// calculateArea()


//Encapsulation
//Encapsulation = data ko safe rakhna (direct access se bachana)
//Real life example
// Socho tum:
// 🏦 Bank account hai tumhara
// 👉 Tum: 
// deposit karte ho
// withdraw karte ho
// ❗ Lekin tumhein nahi pata:
// bank account ka balance kaise manage hota hai
// transactions kaise record hote hain
// 👉 Ye hi hai Encapsulation

//code example of encapsulation
function BankAccount(amaount){
    let balance=1000  // private variable

    return{
        deposit:function(amount){
            balance += amount
            console.log("balance",balance)
        }
    }
}
const acc= BankAccount()
acc.deposit(500)

//samjh kia aya 
// Tum bas deposit() call karte ho 
//  Balance kaise manage hota hai? → hidden
//  Ye hi encapsulation hai
//Easy yaad trick
// Encapsulation = Data ko safe rakhna, direct access se bachana
//Galat samajhne wali baat
//Encapsulation ka matlab ye nahi hai ki hum data ko completely chhupa denge
//Hum sirf direct access se bachayenge aur necessary methods provide karenge
//sir ka answer
//Encapsulation ek programming concept hai jisme hum data ko safe rakhte hain aur direct access se bachate hain. Is se hum data ko control kar sakte hain aur unwanted access se bach sakte hain. Encapsulation ke 2 types hote hain: data encapsulation aur method encapsulation. Data encapsulation mein hum data ko private rakhte hain aur public methods provide karte hain, jabki method encapsulation mein hum methods ko private rakhte hain aur public interface provide karte hain.


function User(){
    let password="12345" // private variable

    return{
        Login:function(pass){
            if(pass===password){
                console.log("Login successful")
            }
        }
    }
}
  const user = User()
  user.Login("12345")

  function Checkpassword(){
   let password="12345"
    return{
        check:function(passs){
            if(passs===password){
                console.log("password is correct ")
            }
        }
    }
  }
 let check = Checkpassword()
 check.check("12345")

 //data direct access hota hai ya hidden hota hai? 
//data hidden hota hai, direct access nahi hota hai


//Inheritance
//Inheritance = ek class ke properties aur methods ko dusri class mein use karna
//Real life example
// Socho tum:
//Father → Son
// 👉 Father ke paas:
// 1. Property: name
// skills
// 👉 Son automatically le leta hai
// 🔥 Ye hi Inheritance hai

class Person{
    walk(){
        console.log("Walking..")

    }
}

class student extends Person{
}
const s1 = new student()
s1.walk()


//samjh kia aya
// Student class Person class se walk() method inherit kar leta hai
//  Ye hi inheritance hai

//thora adavanced example of inheritance
class Person1{
    constructor(name){
        this.name=name
    }
}
class Student extends Person1{
    constructor(name,grade){
        super(name)  // 👈 yahan parent call ho raha
        this.grade=grade;
    }
}
 const s2 = new Student("Ali","A")
 console.log(s2.name)
 console.log(s2.grade)

 //Easy yaad trick
// Inheritance = ek class ke properties aur methods ko dusri class mein use karna

//super ka use kb hota hai?
//super ka use child class ke constructor mein parent class ke constructor ko call karne ke liye hota hai. Is se hum parent class ke properties ko initialize kar sakte hain aur child class mein apni properties bhi add kar sakte hain. Super ka use inheritance mein hota hai jab hum parent class ke properties aur methods ko child class mein use karna chahte hain.
 

// extend ka use kb hota hai?
//extends ka use hota hai parent class ko inherit karne ke liye
//super() parent class ka constructor call karta hai

//Pillar 4: Polymorphism
//Polymorphism = ek function ya method ka multiple forms lena
//Real life example
// Socho tum:

// Button
// 👉 Same button:
// phone mein → call
// game mein → jump
// 👉 kaam alag, button same
// 🔥 Ye hi polymorphism

//code example of polymorphism
class Animal{
sound(){
    console.log("Animals Sound")
}
}
class Dog extends Animal{
    sound(){
        console.log("Brak")
    }
}
class Cat extends Animal{
    sound(){
        console.log("Meow")
    }
}
  const a1 = new Dog()
  const a2 = new Cat()
  a1.sound()
  a2.sound()

  //samjh kia aya
// Dog aur Cat class Animal class ke sound() method ko override kar rahi hain
//  Ye hi polymorphism hai

//Easy yaad trick
// Polymorphism = ek function ya method ka multiple forms lena
//“Polymorphism ka matlab hai ek hi method different classes mein different behavior show kare.”

   //🧪 Q2
//👉 Agar 2 classes mein same function ho lekin output different ho to kya kehte hain?
//👉 Answer: Polymorphism 

//Q3 (code likho)

//“OOP ke 4 pillars hain: Abstraction (logic hide), Encapsulation (data protect), Inheritance (code reuse), aur Polymorphism (same method different behavior).”


  
      
  