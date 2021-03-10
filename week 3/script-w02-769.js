///////////////////////////////////////
/* Code Challenge

let davidHeight = 1.69;
let davidWeight = 78;
let davidBMI = davidWeight / (davidHeight * davidHeight);

let steveHeight = 1.95;
let steveWeight = 92;
let steveBMI = steveWeight / (steveHeight * steveHeight);

let davidHigherBMI = (davidBMI > steveBMI);
console.log(davidBMI, steveBMI, davidHigherBMI);
*/

/* 
let davidHeight = 1.88;
let davidWeight = 95;
let davidBMI = davidWeight / (davidHeight * davidHeight);

let steveHeight = 1.76;
let steveWeight = 85;
let steveBMI = steveWeight / (steveHeight * steveHeight);

let davidHigherBMI = (davidBMI > steveBMI);
console.log(davidBMI, steveBMI, davidHigherBMI);
*/

/*
let davidHeight = 1.72;
let davidWeight = 78;
let davidBMI = davidWeight / (davidHeight * davidHeight);

let steveHeight = 1.82;
let steveWeight = 85;
let steveBMI = steveWeight / (steveHeight * steveHeight);

let davidHigherBMI = (davidBMI > steveBMI);
console.log(davidBMI.toFixed(2), steveBMI.toFixed(2), davidHigherBMI);
*/

////////////////////////////////
// Strings and Template Literal
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string ...`);
console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/*
let country = 'Taiwan';
let continent = 'Asia';
let population = 23.29
const isIsLand = true;
let language = 'Chinese';
let finlandPopulation = 6;
let averagePopulation = 33;

console.log('population split in half: ', population/2);
console.log('population increase in 1 million', ++population);
console.log('台灣人口 > 芬蘭人口? ', population > finlandPopulation);
console.log('台灣人口 < 平均人口? ', population < averagePopulation);
console.log(country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language);
let description = country +' is in ' + continent +', and its '+ population +' million people speak ' +language;
console.log(description);

let description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

*/

/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/

/* 
let country = 'Taiwan';
let continent = 'Asia';
let population = 23.29
const isIsLand = true;
let language = 'Chinese';
let finlandPopulation = 6;
let averagePopulation = 33;

if ( population > averagePopulation) {
  console.log(`${country}'s population is ${population - averagePopulation} above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation-population} million below average`);
}
*/

/*
let name1 = 'David'
let name1Height = 1.69;
let name1Weight = 68;
let name1BMI = name1Weight / (name1Height * name1Height);

let name2 = 'Steve'
let name2Height = 1.95;
let name2Weight = 92;
let name2BMI = name2Weight / (name2Height * name2Height);

let name1HigherBMI = (name1BMI > name2BMI);
console.log(name1BMI, name2BMI, name1HigherBMI);

if(name1BMI > name2BMI) {
  console.log(`${name1}'s BMI (${name1BMI.toFixed(2)}) is higher than ${name2}'s (${name2BMI.toFixed(2)})!`);
} else if (name2BMI > name1BMI) {
    console.log(`${name2}'s BMI (${name2BMI.toFixed(2)}) is higher than ${name1}'s (${name1BMI.toFixed(2)})!`);
} else {
    console.log(`${name1}'s BMI (${name1BMI.toFixed(2)}) is equal to ${name2}'s (${name2BMI.toFixed(2)})!`);
}

*/

// Type Conversion and Coercion
// type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

*/

/*
// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

*/

const numNeighbors = Number(
  prompt('How many neighbor countries does your country have?')
);

if (numNeighbors == 1) {
  console.log('Only 1 border using ==');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No border');
}

if (numNeighbors === 1) {
  console.log('Only 1 border using ===');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No border');
}
