console.log('I am Connected')

/* let size = "small";
let drink = "Cola"; */

const inputNum1 = 20;
const inputNum2 = 20;
const operator ="multi";

calculator = (number1, number2, operator) => {
	let calcResult;
	switch (operator) {
    case "add":
		calcResult = number1 + number2;
        break;
    case "minus":
		calcResult = number1 - number2;
        break;
    case "multi":
		calcResult = number1 * number2;
        break;
	case "div":
		calcResult = number1 / number2;
			break;
	case "mod":
		calcResult = number1 % number2;
			break;
						
    default:
		calcResult = "No maths here";
}
     let message = `Number ${number1} ${operator.toUpperCase()} number ${number2} equals ${calcResult}`;
return message;
}

console.log(calculator(inputNum1,inputNum2,operator));


/* let drinkButton = document.querySelectorAll(".drinkButton");
console.log(drinkButton);
drinkButton.forEach(button => {
	
	button.addEventListener("click", function(event) {
		console.log(`The event is ${event}`);
		console.log(`The target is ${event.target}`);
	let drinkValue = event.target.value;
	console.log(drinkValue);
	console.log(drinkOrder("Large",drinkValue));
});

	
});

drinkOrder = (size,buttonName) => {
let drinkLabel;
	switch (buttonName) {
    case "Cola":
       drinkLabel = "Cola";
        break;
    case "Lemonade":
		drinkLabel = "Lemonade";
        break;
    case "Orangeade":
		drinkLabel = "Orangeade";
        break;
    default:
        drinkLabel = "pick something from the menu";
}
	let message = `You have ordered a ${size} drink of ${drinkLabel}`;
	return message;
} */

//console.log(drinkOrder("Large","sss"));
// ----- FIND PERCENTAGE OFF -----
/* const number = prompt("Enter number");
const percentage = prompt("Enter percentage");

function percentageCalculator(number,percentage) {
	if( +number && +percentage) {
		let percentOff = (percentage/100)*number;
		return percentOff;
	} else {
	console.log("missing number");
	}
}

console.log(percentageCalculator(number, percentage)); */

// Demo - 1 - Basic Function
/*
// Declare - This does nothing
function funExp1() {
    console.log(Date());
}

// Invoke - This uses the function
funExp1();

// Example of function doing something 
// function funExp2() {
//     let tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     console.log(tomorrow);
// }
// funExp2();
*/

// Demo - 2 - Arguments
/*
function funExp3(arg1, arg2) {
    console.log(arg1 * arg2);
}

funExp3(5, 10);
*/

// Demo - 3 - Scope
/*
let varExp2 = 10; // Global Scope
let varExp3 = 10; // global scope

function funExp5() {
    let varExp3 = 100; // local scope
    console.log(varExp2 * varExp3);
}

funExp5();
console.log(varExp2);
console.log(varExp3);
*/

// Demo - 4 - Arrow Functions
/*
// arrowExp1 = () => {
//     return new Date();
// };
// console.log(arrowExp1());

// Example 2 - Arguments

//  arrowExp2 = (arg1, arg2) => {
//   return arg1 * arg2;
//  };
//  console.log(arrowExp2(5, 10));

// Example 3 - Show the different shape of arrow functions

//  arrowExp3 = (arg1, arg2) => (
//     arg1 * arg2
//  );
//  console.log(arrowExp3(5, 10));

 arrowExp4 = (arg1, arg2) => arg1 * arg2;
 console.log(arrowExp4(5, 10));

//  let varExp7 = ((arg1, arg2) => arg1 * arg2);
//  console.log(varExp7(2, 5));
*/

// Demo - 5 - Comparison Operators
/*
// Comparison Operators
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);

// Equality Opertors
console.log(10 == '10');
console.log(10 != '10');
console.log(10 === '10');
console.log(10 !== '10');

// Boolean Logic
// IF example
let age = 34;

if (age <= 34) {
	console.log('True in the if statement');
}
*/

// Demo - 6 - Logical Operators & ternary
/*
// Logical Operators
// && || !

// if (!(1 === 3 && 2 === 2)) {
//     console.log('this has worked');
// } else {
//     console.log('this has NOT worked');
// }


// truthy or falsy
// falsy = false, 0, -0, '', null, undefined, NaN

// let var1 = 10

// if (var1) {
// 	console.log('this has worked');
// } else {
// 	console.log('this has NOT worked');
// }


// // ternary Operator

// const varTernary = true
// console.log(varTernary ? 'This is the true result' : 'This is the false result');
*/

// Demo - 7 - Switch Statement
/*
switch (new Date().getDay()) {
	case 0:
		day = 'Sunday';
		console.log(day);
		break;
	case 1:
		day = 'Monday';
		console.log(day);
		console.log(new Date().getDay());
		break;
	case 2:
		day = 'Tuesday';
		console.log(day);
		break;
	case 3:
		day = 'Wednesday';
		console.log(day);
		break;
	case 4:
		day = 'Thursday';
		console.log(day);
		break;
	case 5:
		day = 'Friday';
		console.log(day);
		break;
	case 6:
		day = 'Saturday';
		console.log(day);
}
*/