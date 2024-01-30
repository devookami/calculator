const screen = document.querySelector("#screen");
const btns = document.querySelectorAll("button");
let firstNum;
let secondNum;
let operator;

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (
			btn.value === "+" ||
			btn.value === "-" ||
			btn.value === "*" ||
			btn.value === "/"
		) {
			firstNum = screen.value;
			screen.value = "";
			operator = btn.value;
		} else if (btn.value === "clear") {
			screen.value = "";
			firstNum = 0;
			secondNum = 0;
			operator = "";
		} else if (btn.value === "=") {
			console.log(firstNum);
			secondNum = screen.value;
			screen.value = operate(operator, firstNum, secondNum);
			firstNum = operate(operator, firstNum, secondNum);	
			console.log(firstNum);
			console.log(operator);
			console.log(secondNum);
		} else {
			screen.value += btn.value;
		}
	});
});

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;``
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
function operate(operator, a, b) {
	let firstNum = Number(a);
	let secondNum = Number(b);
	switch (operator) {
		case "+":
			return add(firstNum, secondNum);
		case "-":
			return subtract(firstNum, secondNum);
		case "*":
			return multiply(firstNum, secondNum);
		case "/":
			if (b === 0) return null;
			else return divide(firstNum, secondNum);
		default:
			return null;
	}
}
