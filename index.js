// Define the characters that can be used in the passwords.
const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

// Select DOM elements.
const btnEl = document.querySelector('.btn');
const password1El = document.querySelector('.first-password');
const password2El = document.querySelector('.second-password');

// Generate a random number.
function randomNumber(arr) {
	return Math.floor(Math.random() * arr.length);
}

// Generate two random passwords and display them.
function randomPasswords() {
	let password1 = [];
	let password2 = [];
	// Consider using named constants or variables for the 
	// hard-coded values such as 15 in the while loop. 
	// This improves code readability and makes it easier to modify in the future.
	// Instead of repeatedly pushing elements into the password arrays inside the 
	// while loop, consider using the Array.from method or the spread operator for better readability.
	password1 = Array.from({ length: 15 }, () => characters[randomNumber(characters)]);
	password2 = Array.from({ length: 15 }, () => characters[randomNumber(characters)]);
	// while (password1.length < 15 && password2.length < 15) {
	// 	password1.push(characters[randomNumber(characters)]);
	// 	password2.push(characters[randomNumber(characters)]);
	// }
	// password1 = Array.from({ length: 15 }, () => characters[randomNumber(characters)]);
	// password2 = Array.from({ length: 15 }, () => characters[randomNumber(characters)]);

	password1El.textContent = password1.join('');
	password2El.textContent = password2.join('');
}

// Add a click event listener to the button to generate random passwords.
btnEl.addEventListener('click', randomPasswords);

// Function to copy text to the clipboard.
// The variable names are clear, but consider using more descriptive names for elements in the copyText function.
// For instance, instead of storage, a name like temporaryTextarea might be more explicit.
// The execCommand('copy') method is considered deprecated. 
// You might want to explore using the navigator.clipboard.writeText API, which is more modern and cleaner.
// Instead of using innerHTML to get and set text content, consider using textContent to avoid potential 
// security risks associated with injecting HTML
// Instead of using innerHTML to get and set text content, 
// consider using textContent to avoid potential security risks associated with injecting HTML
function copyText(element) {
	const storage = document.createElement('textarea');
	storage.value = element.innerHTML;
	element.appendChild(storage);
	storage.select();
	storage.setSelectionRange(0, 99999);
	document.execCommand('copy');
	element.removeChild(storage);

	// Display a tooltip when the text is copied.
	const tooltip = document.createElement('p');
	tooltip.className = 'tooltip';
	tooltip.textContent = 'Copied!';
	element.appendChild(tooltip);

	// Remove the tooltip after a short delay.
	setTimeout(() => {
		element.removeChild(tooltip);
	}, 1000);
}

// Listen for click events on the document to copy passwords.
document.addEventListener('click', (e) => {
	if (password1El.textContent && e.target.id === 'p-1') {
		copyText(password1El);
	}

	if (password2El.textContent && e.target.id === 'p-2') {
		copyText(password2El);
	}
});
