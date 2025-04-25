


// prompt ('What is your name');
// prompt ('what is her name');

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// if (loveScore > 7 ) {
//   alert('Your Love Score is ' + loveScore + '%' + ' You guys are compatible')
// }
// if (loveScore > 50 && loveScore <= 7 ){
//   alert('Your Love Score is ' + loveScore + '%' + ' You guys need to work on yourselves')

// }else{
//   alert('Your Love Score is ' + loveScore + '%' + ' You guys not compatible')
// }




//  let guestList = ['David', 'Seyi', 'Wale', 'Ayo', 'Dele', 'Sayo'];
// let guestName = prompt ('What is your name?')
// if (guestList.includes(guestName)){
//   alert('Welcome, You are on the guest list')
// }else{
//   alert('Sorry, You are not invited')
// }













// function myFunction() {
//   return 3 + 3;
// }
// console.log(myFunction())

// function name() {
//     alert("Hello David")
// }
// console.log(name())

// function addNumbers(num1, num2, num3) {
//     return num1 + num2 * num3;
//   }
  
// console.log(addNumbers(5, 20, 5))

// Function to greet user
// function greetUser(name = "Guest") {
//     return `Hello, ${name}!`;
//   }
// console.log(greetUser('David'))


// let message ="Hello"
// let firstName = "David"
// alert(message + " There " + firstName)

// let dogAge = prompt("How old is your dog")
// let humanAge = ((dogAge - 2) *4) +21
// console.log("Your dog is " + humanAge +" years old in human years")

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age
    let days = yearsRemaining * 365
    let weeks = yearsRemaining * 52
    let months = yearsRemaining * 12

    alert( "You have " + days + " days " + weeks + " weeks, " + months + " months remaining")
}

// lifeInWeeks(20)

let fuelPrice = 1000

if (fuelPrice < 800){
    console.log("Inflation has set in")
}else{
    console.log("No inflation")
}

let javaScriptIsFun = true

if (javaScriptIsFun = false){
    console.log("It is a lie")
}else{
    console.log("It actually is fun")
}

let age = 18

if ( age > 17){
    console.log("David can start driving lessons")
}else{
    console.log("David is too young to drive")
}


let guestList = ["David", "Wale", "Femi", "Lanre", "Lekan", "Bella"]
let guestName = prompt("What is your name")
if(guestList.includes(guestName)){
    alert("You are welcome to the party")
}else{
    alert("You are not invited")
}

