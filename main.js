const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

let calculation = [];
let acc = null;

function clickButton(e) {
	let value = e.currentTarget.textContent;

	if (value === 'CLEAR') {
		calculation = [];
		screen.textContent = '0';
	} else if (value === '=') {
		screen.textContent = eval(acc);
	} else {
		calculation.push(value);
		acc.join('');
		screen.textContent = acc;
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', clickButton);
});
