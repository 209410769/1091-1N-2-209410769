/*
//jimmy's 
let jimmyHeight = 1.78;
let jimmyWeights = 60;
let jimmyBMI =jimmyWeights/(jimmyHeight*jimmyHeight);

//tommy's
let tommyHeight = 1.75;
let tommyWeights = 120;
let tommyBMI =tommyWeights/(tommyHeight*tommyHeight);

let jimmyHigherBMI = (jimmyBMI < tommyBMI);
console.log(jimmyBMI.toFixed(2),tommyBMI.toFixed(2),jimmyHigherBMI)
*/


/*
//amy's 
let amyHeight = 1.65;
let amyWeights = 45;
let amyBMI =amyWeights/(amyHeight*amyHeight);

//john's
let johnHeight = 1.75;
let johnWeights = 60;
let johnBMI =johnWeights/(johnHeight*johnHeight);

let amyHigherBMI =(amyBMI > johnBMI);
console.log(amyBMI.toFixed(2),johnBMI.toFixed(2),amyHigherBMI);
*/


/*
//hank's
let hankHeight = 1.58;
let hankWeights = 50;
let hankBMI =hankWeights/(hankHeight*hankHeight);

//max's
let maxHeight = 1.78;
let maxWeights = 100;
let maxBMI =maxWeights/(maxHeight*maxHeight);

let hankHigherBMI =(hankBMI > maxBMI);
console.log(hankBMI.toFixed(2),maxBMI.toFixed(2),hankHigherBMI);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// String and Template Literal
/*
const firstName = 'Jimmy';
const job = 'student';
const birthYear = 2001;
const year = 2021;

const jimmy = "I'm "+firstName+', a '+(year-birthYear)+' years old '+job +'!';
console.log(jimmy);

*/




/*
console.log('population split in half: ', population/2);
console.log('population increase in 1 million', ++population);
console.log('台灣人口 > 芬蘭人口? ', population > finlandPopulation);
console.log('台灣人口 < 平均人口? ', population < averagePopulation);
console.log(country + ' is in ' + continent + ', and its ' + population + 
' million people speak ' + language);

let description = country +' is in ' + continent +', and its '+ population +
' million people speak ' +language;
console.log(description);

let description2= `${country} is in ${continent}, and its ${population} 
million people speak ${language};`
console.log(description2);
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let country = 'Taiwan';
let continent = 'Asia';
let population = 33.29
const isIsLand = true;
let language = 'Chinese';
let finlandPopulation = 6;
let averagePopulation = 33;

if(population>33){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${population} million below average`)
}
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//jimmy's 
let name1 = 'Jimmy'
let name1Height = 1.78;
let name1Weights = 60;
let name1BMI =name1Weights/(name1Height*name1Height);

//tommy's
let name2 = 'Tommy'
let name2Height = 1.78;
let name2Weights = 60;
let name2BMI =name2Weights/(name2Height*name2Height);

let name1HigherBMI = (name1BMI < name2BMI);
console.log(name1BMI.toFixed(2),name2BMI.toFixed(2),name1HigherBMI)

if(name1BMI>name2BMI){
    console.log(`${name1}'s BMI (${name1BMI.toFixed(2)}) is higher than ${name2}'s ${name2BMI.toFixed(2)}!`);

}else if(name2BMI > name1BMI){
    console.log(`${name2}'s BMI (${name2BMI.toFixed(2)}) is higher than ${name1}'s ${name1BMI.toFixed(2)}!`);
}else {

    console.log(`${name1}'s BMI (${name1BMI.toFixed(2)}) is equal to ${name2}'s ${name2BMI.toFixed(2)}!`);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numNeighbors = (prompt("How many neighbour countries does your country have?"))
if(numNeighbors == 1){
    console.log('Only 1 borfer using ==');
}else if (numNeighbors > 1){
    console.log('More than 1 border');
}else{
    console.log('No border');
}

if(numNeighbors === 1){
    console.log('Only 1 border using ===');
}else if(numNeighbors > 1) {
console.log('More than 1 border');
}else{
    console.log('No border');
}