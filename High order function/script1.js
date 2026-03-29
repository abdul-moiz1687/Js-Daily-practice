//for each
//Concept
// forEach = array ke har element pe kaam karo
//  return nahi deta
//  new array nahi banata
//  sirf loop jaisa kaam
//  “forEach array ke har element par function chalata hai.”

// let task = ["study","Coading","Sleep"];
// let showTsk=task.forEach(function(task){
//     console.log(task)
// })

// let froot= ["Apple","Banana","PineApple","Graps"];
// let showFruit=froot.forEach(function(froot){
//     console.log(froot)
// })

// let cars=["tpyota","civic","suzuki"];
// let showCars=cars.forEach(cars=>{
//     console.log(cars)
// })
// ============================

//map 
// map = new array banata hai
// Har element ko change karta hai aur result return karta hai.
//“map array ke har element ko modify karke new array return karta hai.”

// | forEach      | map              |
// | ------------ | ---------------- |
// | sirf loop    | loop + new array |
// | return nahi  | new array return |
// | display kaam | data change kaam |

// let num = [1,2,3,4]
// let result = num.map(function(num){
//     return num*2
// })
// console.log(result)

// let nums=[1,2,3,4,5];
// let numb=nums.map(nums=>nums*2)
// console.log(numb)

// let price = [100, 200, 300];
// let prices=price.map(function(price){
//     return price + 10 
// })
// console.log(prices)

//Filter
// Concept
// filter = condition check + new array
//  Sirf woh elements return karta hai jo condition pass karte hain.
// “filter array me se condition true honay walay elements ka new array banata hai.”

// let number = [1,2,3,4,5];
// let results = number.filter(function(num){
//     return num >2
// })
// console.log(results)

// let nums=[1,2,3,4,5];
// let result=nums.filter(nums=>nums>2)
// console.log(result)

// // | Method  | Kaam                  |
// // | ------- | --------------------- |
// // | forEach | loop only             |
// // | map     | change + new array    |
// // | filter  | condition + new array |

// let mark = [35, 80, 45, 90, 30];
// let marks=mark.filter(mark=>mark>=50)
// console.log(marks)

//Find 
// Concept
// find = pehla match return karta hai
//  Condition true hui → wahi element mil gaya
//  Baaki check nahi karta
// New array nahi — single value
// “find array me se condition true honay wala pehla element return karta hai.”

// let number = [10,20,30,40]
// let numbers=number.find(function(number){
//     return number>15
// })
// console.log(numbers)
//30 bhi >15 hai, par find pehla match hi deta hai.

// let num = [10,20,30,40]
// let rsult = num.find(num=> num>15);
// console.log(rsult)
// | filter           | find         |
// | ---------------- | ------------ |
// | sab matches      | pehla match  |
// | array return     | single value |
// | multiple results | ek result    |

// let users = ["Ali", "Ahmed", "Usman", "Hassan"];
// let uResult = users.find(users=> users.length>5)
// console.log(uResult)

//Reduce 
// Concept
// reduce = poori array ko ek value me convert karta hai
//  Sum, total, count, combine — sab reduce
//  Ek “accumulator” value chalti rehti hai

// “reduce array ke elements ko combine karke single value return karta hai.”

var number = [1,2,3,4,5,6];
var result = number.reduce(function(acc,num){
    return acc + num
},0)
console.log(result)

// Structure samjho (important)
// array.reduce(function(accumulator, currentValue){
//    return updatedValue;
// }, initialValue);
// accumulator (acc) → result store karta rehta hai
// currentValue (num) → current item
// initialValue → start value (sum me 0)

var nums = [1,2,3,4,5,5,6,7,8];
var tNum = nums.reduce((acc,nums)=> acc+nums,0)
console.log(tNum)

let marks = [50, 60, 70];
let tMark = marks.reduce((acc,marks)=>acc+marks,0)
console.log(tMark)