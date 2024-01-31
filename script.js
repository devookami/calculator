const screen = document.querySelector("#screen");
let history = document.querySelector("#history");
const btns = document.querySelectorAll("#btn");
let firstNum;
let secondNum;
let operator;

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn.value === "+/-") {
			screen.value = -screen.value;
		} else if (
			btn.value === "+" ||
			btn.value === "-" ||
			btn.value === "x" ||
			btn.value === "/" ||
			btn.value === "%"
		) {
			firstNum = screen.value;
			screen.value = "";
			operator = btn.value;
			history.value = `${firstNum} ${operator}`;
		} else if (btn.value === "clear") {
			screen.value = "";
			firstNum = 0;
			secondNum = 0;
			operator = "";
			history.value = "";
		} else if (btn.value === "=") {
			secondNum = screen.value;
			history.value = `${firstNum} ${operator} (${secondNum})`;
			screen.value = operate(operator, firstNum, secondNum);
			firstNum = operate(operator, firstNum, secondNum);
		} else {
			if (btn.value === ".") {
				if (screen.value.includes(".")) {
					screen.value = screen.value.substring(0, screen.value.length - 1);
				}
				screen.value = screen.value - 0;
			}
			screen.value += btn.value;
		}
	});
});

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return (a / b).toFixed(2);
}
function percent(a, b) {
	return a % b;
}
function operate(operator, a, b) {
	let firstNum = Number(a);
	let secondNum = Number(b);
	switch (operator) {
		case "+":
			return add(firstNum, secondNum);
		case "-":
			return subtract(firstNum, secondNum);
		case "x":
			return multiply(firstNum, secondNum);
		case "/":
			if (b === 0) return null;
			else return divide(firstNum, secondNum);
		case "%":
			return percent(firstNum, secondNum);
		default:
			return null;
	}
}
