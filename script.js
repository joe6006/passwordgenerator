// Assignment Code
//try using arrow functions for practice

var generateBtn = document.getElementById("generate");
// what it can use to generate a password
var resultEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('upper');
var lowercaseEl = document.getElementById('lower');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

// found this charset and decided to use it as a refrence https://net-comber.com/charset.html
//created functions for all four using the charset above using math method easier to execute
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	
	const symbols = '!@#$%^&*(){}[]=<>/,.'

	return symbols[Math.floor(Math.random() * symbols.length)];
}

//puts the functions above in a const so it can be called later 

//using const that way i don't accidently change the strings
const random = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//then make a function to get the password


function generatePassword(lower, upper, number, symbol, length) {

	let generatedPassword = '';

	var Count = lower + upper + number + symbol;

console.log('count:', Count);

  //the .filter makes a new array that pass the boolean test whne it is called back thank you mozilla lol

	var Arr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	console.log("Arr:", Arr)
	// if non of the checkboxes are checked return nothing

	if(Count === 0) {

		return '';
	}
	
	// this creates a loop to for the parameters called in the function
  
	for(let i = 0; i < length; i += Count) {

		      Arr.forEach(type => {

			const func = Object.keys(type)[0];

//calls back the function

			generatedPassword += random[func]();
		});

	}

	//use slice to create a new string

	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//add eventlistener to generate button

//this is for the button to check and see if the checkboxes are selected or not as well as the length number

generateBtn.addEventListener('click', () => {
	const length = +lengthEl.value;
	const ifLower = lowercaseEl.checked;
	const ifUpper = uppercaseEl.checked;
	const ifNumber = numbersEl.checked;
	const ifSymbol = symbolsEl.checked;

  console.log(ifLower, ifUpper, ifNumber, ifSymbol, length);

	//this dislpays the result in the textbox after clicking on the button

	resultEl.innerText = generatePassword(
    ifLower,
     ifUpper,
      ifNumber,
       ifSymbol,
       length);
});