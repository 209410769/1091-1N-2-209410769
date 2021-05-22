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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
      team1: 1.33, 
      x: 3.25, 
      team2: 6.5, 
    }, 
  };

//1.

 const[player1,player2]= game.players;
 console.log('player1,',player1);
 console.log('player2,',player2);
 

 //2.
 const[gk,...fieldPlayers]=player1;
 console.log('gk',gk);
 console.log('fieldPlayer',fieldPlayers);


//3.
const allPlayers = [...player1,...player2];
console.log ('allPlayer',allPlayers )

//4.
const players1Final=[...player1,'Thiago','Coutinho','Perisic'];
console.log('4.players1Final',players1Final);

//5.
let {
    odds:{
        team1,x:draw,team2
    }
}=game;
  console.log('5:team1',team1);
  console.log('5:draw',draw);
  console.log('5:team2',team2);
//6.
const printGoals= function(...players){
    console.log('6. players',players);
}
printGoals('Davies','Muller','Lewan','Kimmich');
printGoals('Davies','Muller');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('7: Team 1 is more likely to win ');
team1=10.1
console.log('change Team1 value to 10.1');
team1>team2&&console.log('7: Team 2 is more likely to win');