//The switch Statement
/*
function showMessage (language, id){
    switch (language) {
        case 'chinese':
        case 'mandarin':
            console.log(`Most number of native speakers!${language} ${id}`)
            break;
    
            case 'Spanish':
            console.log(`2nd place in number of native speakers ${language} ${id}`);
            break;
    
            case 'English':
                console.log(`3rd place ${language} ${id}`);
            break;
            
            case 'Hindi':
                console.log(`Number 4 ${language} ${id}`);
            break;
    
            case 'arabic':
                console.log(`5th most spoken language ${language} ${id}`);
            break;
    
            default: //'for all other simply log':
                console.log(`Great language too ${language} ${id}`)
    
    }
}

const id = '209410769'
showMessage('chinese',id);
showMessage('mandarin',id);
showMessage('Spanish',id);
showMessage('english',id);
showMessage('Hindi',id);
showMessage('arabic',id);
showMessage('japan',id);
*/


//The conditional ternary operator

/*
let averagePopulation = 33

//use if else if
function showMessage2(country,population){
    if(population<averagePopulation){
        console.log(`${country}'s population (${population}) is above average (${averagePopulation})`)
    }else if(population>averagePopulation){
        console.log(`${country}'s population (${population}) is below average (${averagePopulation})`)
    }else{
        console.log(`${country}'s population (${population}) is equal to average (${averagePopulation})`)
    }

}

showMessage2('Taiwan',23.29)
showMessage2('USA',350.29)
showMessage2('Some',33)
//use ternary operator

function showMessage3(country,population){
let compare = (population<averagePopulation ? 'below':
              (population>averagePopulation ? 'above': 'equal'))
    console.log(`${country}'s population (${population}) is ${compare} to average (${averagePopulation})`)
}


showMessage3('Taiwan',23.29)
showMessage3('USA',350.29)
showMessage3('Some',33)

*/

//Code challenge



function tipCalculator(bill){
    let tip =( bill>=50&&bill<=300? bill*0.15 : bill*0.2 );
    let pay=bill+tip;
    return (`The bill was ${bill},the tip was ${tip},and the total value ${pay}`)
}

console.log(tipCalculator(275));
console.log(tipCalculator(40));
console.log(tipCalculator(430));



/*

//Arrow Function

let averageopoulation =33;
function showMessage3(country,population) {
    let compare =(population < averageopoulation ?'below':
                  (population>averageopoulation)?'above':`equal to`)
    console.log(`${country}'s population${population} is ${compare} average (${averageopoulation})`);
}


function showMessage4(country,population) {
    let compare =(population < averageopoulation ?'below':
                  (population>averageopoulation)?'above':`equal to`)
    console.log(`${country}'s population${population} is ${compare} average (${averageopoulation})`);
}


showMessage3('Taiwan', 23.29)
showMessage4('Taiwan',23.29)
showMessage3('USA',350.29)
showMessage4('USA',350.29)
showMessage3('Some',33)
showMessage4('some,33')

function tipCalculator(bill){
    let tip =(bill >=50 && bill <=300 ? bill *0.15 :bill*0.2);
    return(`the bill was${bill}, the tip was${tip},and the total value ${bill+tip}`)
}

console.log(tipCalculator(275));
console.log(tipCalculator(48));
console.log(tipCalculator(430));


console.log('arrow',tipCalculator(275));
console.log('arrow' ,tipCalculator(40))
console.log('arrow',tipCalculator(430));

*/

//Function
/*
const describeCountry =(country,population,capitalCity)=>{
    return (`${country}has ${population} people and its capital city is ${capitalCity}`)}


console.log(describeCountry('Taiwan',23.29,'Taipei'));
console.log(describeCountry('USA',350.29,'Washington'));
console.log(describeCountry('Japan',126.5,'tokyo'));
*/