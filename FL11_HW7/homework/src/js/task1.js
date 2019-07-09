let minEmail = 6;
let minPassword = 5;
let email = prompt('Enter your e-mail', '');
let password;
let change;
let oldPassword;
let newPassword;
let newPass;

if (email === '' || email === null) {
	alert('Canceled');
}else if(email.length < minEmail) {
	alert("I dont know any emails having name length less than 6 symbols");
}else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
	alert('I dont know you');
}else{
	password = prompt('Enter your password', '');
}

if (password === '' || password === null) {
	alert('Canceled');
}else if (email === 'user@gmail.com' && password !== 'UserPass' || email === 'admin@gmail.com' && password !== 'RootPass'){
	alert('Wrong password');
}else{
	change = confirm('Do you want to change your password?');
}

if (change !== undefined ) {
	alert('You have failed the change');
}else {
	oldPassword = prompt('Old password', '');
}

if (oldPassword === '' || oldPassword === null) {
	alert('Canceled')
}else if (email === 'user@gmail.com' && oldPassword !== 'UserPass' || email === 'admin@gmail.com' && oldPassword !== 'RootPass') {
	alert('Wrong password');
}else {
	newPass = prompt('Enter new password', '');
}

if (newPassword.length < minPassword) {
	alert('It’s too short password. Sorry.');
}else {
	newPass = prompt('Enter new password', '');
}

if (newPassword === newPass) {
	alert('You have successfully changed your password');
}else {
	alert('You wrote the wrong password');
}
