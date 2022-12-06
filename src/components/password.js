let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*-_=+?';

const createPassword = (
	length,
	isUppercase,
	isLowercase,
	isNumber,
	isSymbol,
) => {
	let chars = '';
	isUppercase ? (chars += uppercase) : '';
	isLowercase ? (chars += lowercase) : '';
	isNumber ? (chars += numbers) : '';
	isSymbol ? (chars += symbols) : '';
	return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
	let password = '';
	for (let i = 0; i < length; i++) {
		password += chars.charAt(
			Math.floor(Math.random() * chars.length),
		);
	}
	return password;
};

export default createPassword;
