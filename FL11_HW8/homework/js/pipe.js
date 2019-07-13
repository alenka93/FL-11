function addNumber(number) {
	let a = 1;
    return number + a;
}
function pipe(argument) {
    for (let i = 1; i < arguments.length; i++) {
        argument = arguments[i](argument);
    }
    return argument;
}
