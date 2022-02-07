//////////////////////////////////
// Values and Variables
const country = 'USA';
const continent = 'North America';
let population = 350000000;

console.log(country);
console.log(continent);
console.log(population);
///////////////////////////////////
// Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
///////////////////////////////////
// Let, Const, and Var
language = 'English';
///////////////////////////////////
// Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);

const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language + '.';
console.log(description);
///////////////////////////////////
// Strings and Template Literals
const description1 = `${country} is in ${continent}, and its ${population} people speak ${language}.`
console.log(description1);
///////////////////////////////////
// If / Else Statements
if (population > 33000000) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33000000 - population} below average.`)
}
///////////////////////////////////
// Type Conversion and Coercion
// 4
// 617
// 23
// false
// 1143
///////////////////////////////////