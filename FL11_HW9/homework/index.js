function getNumbers(str) {
	let a = str.split(/[^0-9]+/g);
	return a;
}

function findTypes() {
	let find = {};
	for (let i = 0; i < arguments.length; i++) {
		if (find[typeof arguments[i]]) {
			find[typeof arguments[i]] += 1;
		} else {
			find[typeof arguments[i]] = 1;
		}
	}
	return find;
}

function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
	return arr;
}

function mapArray (array, func) {
	const storage = [];
	let funcNum = 3;
	executeforEach(array, function(el) {
		storage.push(func(el+funcNum));
	});
	return storage;
}

function filterArray (arr, funct) {
	const filter = [];
	executeforEach(arr, function(ell) {
		if (funct(ell)) {
			filter.push(ell);
		}
	});
	return filter;
}

function showFormattedDate(formatDate){
	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let dateWithFullMonthName = '`Date:' + ' ' + monthNames[formatDate.getMonth()] + ' ' 
	+ formatDate.getDate() + ' ' + formatDate.getFullYear() + '`';
	return dateWithFullMonthName;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(ConvertToDate) {
	let input = new Date(ConvertToDate);
	return !isNaN(input);
}
console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween(startDate, endDate) {
	let num1 = 1000;
	let num2 = 3600;
	let num3 = 24;
	let daysLag = Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (num1 * num2 * num3));
	return daysLag;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

let data = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]

function keysObg(obj) {
	let keys = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)){
			keys.push(key);
		}
	}
	return keys;
}
console.log(keysObg({keyOe: 1, keyTwo: 2, keyThree: 3}));

function valueObg(testArray) {
	let vals=[];
	for(let key in testArray) {
		if (testArray.hasOwnProperty(key)){
		vals.push(testArray[key]);
		}
	}
return vals;
}
console.log(valueObg({keyOne: 1, keyTwo: 2, keyThree: 3}));