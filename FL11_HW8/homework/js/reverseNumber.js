function reverseNumber(num) {
	let result = 0;
	let number = 10;
		while (num) {
		result = result * number + num % number;
		num = Math.floor(num / number);
		}
	return result;
}