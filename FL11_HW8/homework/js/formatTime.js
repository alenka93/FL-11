function formatTime(a) {
	let num = 60;
	let num2 = 24;
    let min = a % num;
    let hour = (a - min) / num % num2;
    let day = ((a - min) / num - hour) / num2;
    let format = `${day} day(s) ${hour} hour(s) ${min} minute(s)`;
    return format;
}