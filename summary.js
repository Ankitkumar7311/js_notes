// // //  Primitive

const { name } = require("ejs")

// // //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// // const score = 100
// // const scoreValue = 100.3

// // const isLoggedIn = false
// // const outsideTemp = null
// // let userEmail;

// // const id = Symbol('123')
// // const anotherId = Symbol('123')

// // console.log(id === anotherId);

// // // const bigNumber = 3456543576654356754n



// // // Reference (Non primitive)

// // // Array, Objects, Functions

// // const heros = ["shaktiman", "naagraj", "doga"];
// // let myObj = {
// //     name: "hitesh",
// //     age: 22,
// // }

// // const myFunction = function(){
// //     console.log("Hello world");
// // }

// // console.log(typeof anotherId);

// // // https://262.ecma-international.org/5.1/#sec-11.4.3




// // 10 may 2024
//  const boy = ["ankit","raja","putul","rupesh"];
//  const girl = ["pranjali","asha","sweta"," bengali"]

//     const aaaa = Array.isArray("Hitesh")
//     console.log(aaaa) 

// //  console.log(boy)
// //  console.log(girl)



// objects

// const Student = {
//     name: "Ankit kumar",
//     age : 20,
//     email: "kumarankit42130@gmail.com",
//     gender : "male",
//     isloggedIn : false,
//     Symbol : "ak"
// }

// // split the keys values into string
//   const SS = {...Student.age,...Student.name}
//   console.log(SS)
 
// console.log(Student)
// console.log(Student.name)
// console.log(Student.isloggedIn)
// console.log(Student.gender)
// console.log(Student["name"])


//  modify the object
// console.log(Student.name="prince");

// freeze
//  Object.freeze(Student)
// console.log(Student);




// keys and values access
// console.log(Object.keys(Student))
// console.log(Object.values(Student))

// console.log(Student.hasOwnProperty('isLoggedIn'))



// // destructured of object and json 
// const Student = {
//     name: "Ankit kumar",
//     age : 20,
//     email: "kumarankit42130@gmail.com",
//     gender : "male",
//     isloggedIn : false,
//     Symbol : "ak"
// }

// // destructed
// const {email:ss} = Student // datatypes{keys : new name change jo krna ho } = object ka naam 
// console.log(ss)  


//json
// {
//     name: "Ankit kumar",
//     age : 20,
//     email: "kumarankit42130@gmail.com",
//     gender : "male",
//     isloggedIn : false,
//     Symbol : "ak"
// }
//  // or 
//   [{},{},{},{}] // this is array of json


// 19 function and parameter

// function say(){
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     console.log("hello")
//     }
// say()

// function sum(num1,num2){
    
    
//     return num1 + num2

// }
//  const result = sum(2,3)
//  console.log("result",result)
// // sum() // output is nan
// // sum(2,3) // 5

// // sum(3, null) // 3


// sum(2,3)




// function login(username){
//     return `${username} just logged in`
// }
// console.log(login("ankit")) // ankit just logged in




// function login(username){
//     if(username === undefined){
//         console.log("value daal bsdk")

//     }
//     else {
//         console.log("abb sahi hai be")
//     }
//     return `${username}`
// }
// console.log(login("ankit")) 




// function login(username){
//     if(!username){
//         console.log("value daal bsdk")

//     }
//     else {
//         console.log("abb sahi hai be")
//     }
//     return `${username} ho gya logged in`
// }
// console.log(login("ankit")) 




//    function and objects
 // rest operator = ...name

//  function Cart(...product1){
//   return product1
//  }
// console.log(Cart(222,223,224,22,227))



// function Cart(val1,val2,...product1){
//     return product1
//    }
//   console.log(Cart(222,223,224,22,227))

 // Array pass in function
//  const Myarray = [111,222,333,1000]

//  function Get(getarray){
//     return getarray[1]
//  }
// console.log(Get(Myarray))






let Myname= "ankit kumar"
let roll = 27 
console.log(``)

