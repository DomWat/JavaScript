
// // talking about values and variables
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// let firstName = 'Jonas';
// console.log(firstName)

// firstName = 'Bob'



// // talking about datatypes
// let javaScriptIsFun = true
// console.log(javaScriptIsFun)

// // an operator that shows the 'type' of the value
// console.log(typeof true)
// console.log(typeof javaScriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

// javaScriptIsFun = 'Yes'
// // apparently you can console.log two things lol
// console.log((typeof javaScriptIsFun), (javaScriptIsFun))



// // operators
// // allows you to transform or combine values

// // arithmatic operators 
// let year = 2021

// const ageDom = year - 1993
// const ageMasha = year - 1995
// console.log(ageDom, ageMasha)
// console.log(ageMasha * 2, ageDom / 2, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3 (2 * 2 * 2)

// // concatinating strings
// const firstName = 'Dom'
// const lastName = 'Waters'
// const fullName = firstName + ' ' + lastName
// console.log(fullName)

// // assignment operators 
// let x = 10 + 5
// x += 10 // x = x + 10
// console.log(x)
// x -= 20 // x = x - 20
// console.log(x)
// x *= 2 // x = x * 2
// console.log(x)
// x /= 5 // x = x / 5
// console.log(x)
// x++ // x = x + 1
// console.log(x)
// x-- // x = x - 1
// console.log(x)

// // comparison operators
// console.log(ageDom > ageMasha) // >, <, >=, <=




// // operator precedence
// const now = 2021
// const ageDom = now - 1993
// const ageMasha = now - 1995

// console.log(now - 1993 > now - 1995)

// // can declare two values and variables at the same time
// let x, y
// x = y = 25 - 10 - 5
// console.log(x, y)




// // template literals and multi line strings

// const firstName = 'Dom'
// const job = 'Searching for a job'
// const birthYear = 1993
// const now = 2021

// const dom = `I'm ${firstName} a ${now - birthYear} year old man who is ${job}!`
// console.log(dom)

// console.log(`use template literals
// to make many lines
// just by hitting return!`)




// // if/else statements

// const age = 11

// if (age >= 15) {
//     console.log('have fun driving')
// } else {
//     const yearsLeft = 15 - age
//     console.log(`you still have to wait ${yearsLeft} years`)
// }

// const birthYear = 1993
// let century

// if (birthYear <= 1999 && birthYear >= 1900) {
//     century = 20
// } else {
//     if (birthYear < 1900) {
//         century = 19
//     } else {
//         century = 21
//     }
// }
// console.log(century)




// conversion and coercion
// conversion: when we explicitly want to convert value types
// coercion: JS will automatically change value type

const inputYear = '1993'
console.log(inputYear + 18) //199318
console.log(Number(inputYear)) // 1993 as a numb not string
console.log(Number(inputYear) + 18) // 2011
console.log(Number('Dom')) // NaN (Not a Number)

console.log(String(27)) // '27' becomes a string