let a,b,c;
a = +prompt('First number', '');
b = +prompt('Second number', '');
c = +prompt('Third number', '');
if ( a + b > c && a + c > b && b + c > a) {
	if (a === b && a === c && b === c) {
		console.log('Eequivalent triangle');
	}else if (a !== b && b !== c && c !== a){
		console.log('Normal triangle');
	}else {
		console.log('Isosceles triangle');
	}
}else {
	console.log('Triangle doesn’t exist');
}
