'use strict';

// 1.Functional Declarations vs. Expression

/*

let  worldPopulation = 7900;
//function declaration

function percentageOfWorld1 (population) {
    return population/worldPopulation *100;
}
//function expression
const percentageOfWorld2 =function(population) {
    return population/worldPopulation *100;
}

// arrow function
const percentageOfWorld3 = (population) => {
    return population/worldPopulation *100;
}

//China

let chinaPopulation = 1441

let p1 = percentageOfWorld1(chinaPopulation).toFixed(1);
let p2 = percentageOfWorld2(chinaPopulation).toFixed(1);
let p3 = percentageOfWorld3(chinaPopulation).toFixed(1);
console.log('china',p1,p2,p3);
console.log(`china population ${chinaPopulation} million is ${p1}% of world population ${worldPopulation} million.`)

//Taiwan

let taiwanPopulation = 23.19
let p4 = percentageOfWorld1(taiwanPopulation).toFixed(1);
let p5 = percentageOfWorld2(taiwanPopulation).toFixed(1);
let p6 = percentageOfWorld3(taiwanPopulation).toFixed(1);
console.log('taiwan',p4,p5,p6);
console.log(`Taiwan population ${taiwanPopulation} million is ${p4}% of world population ${worldPopulation} million.`)

//USA

let USAPopulation = 350.29
let p7 = percentageOfWorld1(USAPopulation).toFixed(1);
let p8 = percentageOfWorld2(USAPopulation).toFixed(1);
let p9 = percentageOfWorld3(USAPopulation).toFixed(1);
console.log('USA',p7,p8,p9);
console.log(`USA population ${USAPopulation} million is ${p7}% of world population ${worldPopulation} million.`)

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.Functions Calling Other Functions

/*

let worldPopulation =7900;

const percentageOfWorld =(population) =>{
    return population/worldPopulation *100;
}

const describePopulation =(country,population) => {
    let percentage = percentageOfWorld(population).toFixed(1);
    let str = `${country} population ${population} is ${percentage}% of the world population ${worldPopulation} million.`
    return str;
}

console.log(describePopulation('China',1441));
console.log(describePopulation('Taiwan',23.19));
console.log(describePopulation('USA',350.29));

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Code Challenges

/*

const calcAverage = (s1 , s2, s3)=>((s1+s2+s3)/3).toFixed(2);

const checkWinner = function(avgDolphins,avgKoalas) {
    if(avgKoalas>= 2* avgDolphins ){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    }else if(avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    }else{
        console.log(`No team wins`);
    }
    //Dolphins win (xx.xx vs xx.xx)
}

let avgDolphins1 = calcAverage(44,23,71);
let avgKoalas1 = calcAverage(65,54,49);
checkWinner(avgDolphins1,avgKoalas1);


let avgDolphins2 = calcAverage(85,54,41);
let avgKoalas2 = calcAverage(23,34,27);
checkWinner(avgDolphins2,avgKoalas2);


let avgDolphins3 = calcAverage(21,36,50);
let avgKoalas3 = calcAverage(100,79,50);
checkWinner(avgDolphins3,avgKoalas3);

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.Introduction to Arrays



let  worldPopulation = 7900;

const percentageOfWorld3 = (population) => {
    return population/worldPopulation *100;
}
let population=[1441,23.19,328.2,126.5];
let countries =['China','Taiwan','USA','Japan'];
let percentage =[
    percentageOfWorld3(population[0]).toFixed(1),
    percentageOfWorld3(population[1]).toFixed(1),
    percentageOfWorld3(population[2]).toFixed(1),
    percentageOfWorld3(population[3]).toFixed(1),
]
console.log('percentage',percentage);
//存粹用for
for(let i =0;i<countries.length;i++){
    console.log(`${countries[i]} population ${population[i]} million is ${percentage[i]}% of the world population ${worldPopulation} million.`)
}
//用push

let percentage2 = [];
for(let j =0;j<countries.length;j++){
    let percentage1 = percentageOfWorld3(population[j]).toFixed(1);
    percentage2.push(percentage1);
}
console.log('percentage2',percentage2);
for(let j =0;j<countries.length;j++){
    console.log(`${countries[j]} population ${population[j]} million is ${percentage2[j]}% of the world population ${worldPopulation} million.`)
}


//用forEach
let percentage3 = [];
population.forEach( (p)=> {
    let percentage = (percentageOfWorld3(p)).toFixed(1);
    percentage3.push(percentage)
    }
)
console.log('percentage3',percentage3);
for(let j =0;j<countries.length;j++){
    console.log(`${countries[j]} population ${population[j]} million is ${percentage3[j]}% of the world population ${worldPopulation} million.`)
}



//6.Code Challenges

/*
const calcTip =(bill)=>(bill>=50 && bill<=300)? bill*0.15:bill*0.2;
//console.log(calcTip(100));

let bills = [125,100,250,555,44,350];
let tips = [];
let total = [];

bills.forEach((bill)=>tips.push(calcTip(bill)));
console.log('bills',bills);
console.log('tips',tips);
for(let i=0; i<bills.length;i++) {
    total.push(bills[i]+tips[i]);
}
console.log('total',total);

*/
