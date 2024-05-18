// const name = "ankit"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));


   

//1 Anchor 

//    let text = "Hello World!";
//    let result = text.anchor("Chapter 10");
//    console.log(result) //  <a name="Chapter 10">Hello World!</a>

// let name = "ankit"
// let lastname = name.anchor("kumar")
// console.log (lastname)


   //2  at
//    const name = "Ankit";
//    let thirdLetter = name.at(2); // Retrieves the third letter ("S")
//    console.log(thirdLetter)



//3 big
// const myText = "Hello, world!";
// let bigText = myText.big(); // Wraps myText in <big> tags
// console.log(bigText)

// let animal = "dog"
// let animalname =  animal.big()
// console.log(animalname)
   


//4  blink
// let animal = "dog"
//  let animalname =  animal.blink()
// console.log(animalname)



//5 bold
//let animal = "dog"
// let animalname =  animal.bold()
// console.log(animalname)



// 6 charAt
// const myText = "HELLO WORLD";
// let firstLetter = myText.charAt(0); // Retrieves the first character ("H")
// let secondLetter = myText.charAt(1); // Retrieves the second character ("E")
// let lastLetter = myText.charAt(myText.length - 1); // Retrieves the last character ("D")

// let name= "Ankit kumar"
// let n1 = name.charAt(2)
// console.log(n1)


// 7 charCodeAt

// let name= "Ankit kumar"
// let n1 = name.charCodeAt(0)
// console.log(n1)


// 8 codePointAt                                 // 7 and 8 both are same
// let name= "Ankit kumar"
// let n1 = name.codePointAt(0)
// console.log(n1)


// 9 concat

// let name= "Ankit "
// let n1 = name.concat("kumar")
// console.log(n1)






const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)











 

// const raja = Math.floor((Math.random()*10))
// console.log(raja)


// Function to generate a random number between 0 and 9
function getRandomNumber() {
    return Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
  }
  
  // Generate the random number
  const randomNum = getRandomNumber();
  
  // Display the random number
 // console.log("Random Number:", randomNum);
  
  // Determine if it's "small" or "big"
  if (randomNum <= 4) {
    console.log("small");
  } else {
    console.log("big");
  }
  





  // Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

