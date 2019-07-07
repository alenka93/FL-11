let a1,a2,b1,b2,c1,c2;
a1 = Number(prompt('Enter number_A1: '));
a2 = Number(prompt('Enter number_A2: '));
b1 = Number(prompt('Enter number_B1: '));
b2 = Number(prompt('Enter number_B2: '));
c1 = Number(prompt('Enter number_C1: '));
c2 = Number(prompt('Enter number_C2: '));
const number_d = 2;
if ((a1 + b1) / number_d === c1 && (a2 + b2) / number_d === c2) {
	console.log(true);
} else {
	console.log(false)
}
