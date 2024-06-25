// Fråga #1:
// skapa en funktion som heter biggestNumberInArray() som tar
// en array som en parameter och returns det största numret.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) ska ge en return på 100;
// Använd åtminstonde tre styken javaScript loopar att skriva detta:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	let highest = 0;
for (let i = 0; i < array.value; i++) {
	if (highest < array[i]) {
		highest = array[i];
	}
}
return highest
}

function biggestNumberInArray2(arr) {
let highest = 0;
array.forEach(item => {
	if (highest < item) {
		highest = item;
	}
})
return highest;
}

function biggestNumberInArray3(arr) {
let highest = 0;
for (item of array) {
	if (highest < item) {
		highest = item;
	}
}
return highest;
}

biggestNumberInArray3(array3)


// Fråga #2:
// Skriv en funktion som heter checkBasket() som låter dig veta om föremålet finns korgen eller inte
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
for (item in basket) {
	if (item === lookingFor) {
		return `${lookingFor} is in your basket`
	}
}
return 'that does not exist in your basket'
}














