const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 20;
const STRONG_ATTACK_VALUE=20
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    console.log('monster damage' , damage.toFixed(2) , currentMonsterHealth.toFixed(2) );
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage ;
    console.log('player damage', playerDamage.toFixed(2), currentPlayerHealth.toFixed(2));
    if (currentMonsterHealth<0&&currentPlayerHealth>0 ) {
        alert('You Win !')
    } else if (currentPlayerHealth<0&&currentMonsterHealth>0){
        alert('You Lost !')
    } else if (currentPlayerHealth<0&&currentMonsterHealth<0){
        alert('Draw!')
    } 
}

function strong_attackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    console.log('monster damage' , damage.toFixed(2) , currentMonsterHealth.toFixed(2) );
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage ;
    console.log('player damage', playerDamage.toFixed(2), currentPlayerHealth.toFixed(2));
    if (currentMonsterHealth<0&&currentPlayerHealth>0 ) {
        alert('You Win !')
    } else if (currentPlayerHealth<0&&currentMonsterHealth>0){
        alert('You Lost !')
    } else if (currentPlayerHealth<0&&currentMonsterHealth<0){
        alert('Draw!')
    } 
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strong_attackHandler)