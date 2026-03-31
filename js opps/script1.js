//oops = class + object
//class= designing a blueprint
//object = real world entity

//Base example
// class Student{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     studentData(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     }
// }
// const s1 = new Student("Moiz",18)
// s1.studentData()

// 1. Abstraction
//  Definition
//  Complex cheez ko hide karna, sirf use dena

//code example
// function area(radius){
//     return Math.PI * radius * radius
     
// }
// console.log(area(5))
//Abstraction means hiding complex logic and showing only necessary features.

// 2. Encapsulation
// Definition
// Data ko secure / hide karna 
//code example
// function Counter(){
//     let count = 0

//     return{
//         inc:function(){
//             count ++
//             console.log(count)
//         }
//     }
// }
// const c1 = Counter()
// c1.inc()
// c1.inc()

// class Bank{
//     #money
//     constructor(amount){
//         this.#money = amount

//     }
//     addMoney(val){
//         this.#money += val
//     }
//     showMoney(){
//         console.log(this.#money)
//     }
// }
// const b1 = new Bank (1000)
// b1.addMoney(500)
// b1.showMoney()
//Encapsulation means protecting data and restricting direct access.

// 3. Inheritance
// Definition
// Parent class ke properties and methods ko child class me use karna
//code example
// class Person2{
//     walk(){
//         console.log("walking")
//     }
// }
// class Student2 extends Person2{

// }
// const s2 = new Student2()
// s2.walk()

class Person{
    constructor(name){
        this.name = name 
        }
}
class Student extends Person{
    constructor(name,grade){
        super(name)
        this.grade = grade
    }
}
const c3 = new Student("Moiz","A")
console.log(c3.name)
//Inheritance allows one class to use properties and methods of another class

//polimorphism
//Definition
//Same function, different behavior
//code example
class Animal{
    sound(){
        console.log("Animal makes a sound")
    }
}
 class Dog extends Animal{
    sound(){
        console.log("Dog barks")
    }
 }
 class Cat extends Animal{
    sound(){
        console.log("Cat Meows")
    }
 }
 const d = new Dog()
 const c = new Cat()
 d.sound()
 c.sound()

 //Overloading
 class Sum{
    add(a,b){
        if(b===undefined){
            return a+a
        }
        return a+b
    }
 }
 const s = new Sum()
 console.log(s.add(5)) // 10
 console.log(s.add(5, 3)) // 8
//  Polymorphism means one method behaves differently in different classes.
// This is achieved using method overriding.