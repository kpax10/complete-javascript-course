'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
		console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	}
};



/*
///////////////////////////////////
// For Of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

for (const item of menu.entries()) {
	console.log(`${item[0] + 1}: ${item[1]}`);
}
*/
////////////////////////////////////////
/*
//Coding Challenge #1
const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
		'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...player) {
	console.log(`${player}. Goals scored: ${player.length}`)
};
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
/*
const rest1 = {
	name: 'Capri',
	// numGuests: 20,
	numGuests: 0,
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Giovanni Rossi',
};
*/
/*
// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Nullish Assignment Operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// if (rest2.owner) {
// 	rest2.owner = 'anonymous'
// }

// rest2.owner = rest2.owner && 'anonymous';
rest2.owner &&= 'anonymous'
console.log(rest2.owner);
*/
/*
//////////////////////////////////////
// Nullish Coalescing Operator
restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
console.log(`----- OR-----`);
// Use ANY data type, return ANY data type, short circuiting
console.log(3 || 'jonas'); // 3
console.log('' || 'jonas'); // jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || '' || 'hello' || 23 || null); // hello

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`----- AND-----`);
console.log(0 && 'jonas');// 0
console.log(7 && 'jonas');// jonas
console.log('hello' && 23 && null && 'jonas');// null

if (restaurant.orderPizza) {
	restaurant.orderPizza('mushrooms', 'spinach')
}
restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'cheese');
*/
/*
// DESTRUCTURING
// Rest operator with arrays
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);

const [pizza, , risotto, ...otherfood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu
];
console.log(pizza, risotto, otherfood);

// Rest operator with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// FUNCTIONS
const add = function (...numbers) {
	let sum = 0;
	for (let num of numbers) sum += num;
	console.log(sum);
};
add(2, 3);
add(2, 3, 5);
add(2, 3, 5, 7, 4, 23, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('pepperoni', 'cheese', 'ham', 'tomato sauce');
restaurant.orderPizza('cheese');
*/
/*
// Spread Operator
const arr = [7, 8, 9];
const arr2 = [1, 2, 3];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
const brandNewArr = [...arr2, ...arr];
console.log(brandNewArr);
console.log(...brandNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy);

// Create a menu with the mainMenu and the starterMenu
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables
const str = 'Jonas';
const letters = [...str, '', 'S.']
console.log(...letters);

// Real world example
const ingredients = [
	// prompt(`Let's make pasta! Ingredient 1?`),
	// prompt(`Ingredient 2?`),
	// prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppi' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
*/
////////////////////////////////////////////////
// Destructuring Objects
/*
restaurant.orderDelivery({
	time: '22:30',
	address: 'Via Del Sol, 21',
	mainIndex: 2,
	starterIndex: 2,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [], } = restaurant; // menu property added and given default value, starterMenu name changed and given default value
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri: { open, close } } = openingHours;
console.log(open, close);
*/
/*
///////////////////////////////////////
// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
