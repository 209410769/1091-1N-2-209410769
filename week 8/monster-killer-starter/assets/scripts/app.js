const ATTACK_VALUE = 15;
const MONSTER_ATTACK_ALIVE = 15;

const strongAttackValue = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let i=0;
let j=i;

adjustHealthBars(chosenMaxLife);

function attackHandler() {

    j+=1;
    console.log('第',j,'局');

    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    console.log('monster damage ',damage.toFixed(2), currentMonsterHealth.toFixed(2))

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_ALIVE);
    currentPlayerHealth -= playerDamage;
    console.log('player damage', playerDamage.toFixed(2), currentPlayerHealth.toFixed(2))

    if( currentPlayerHealth > currentMonsterHealth && currentMonsterHealth <= 0 && currentPlayerHealth >= 0){
        alert('You win')
    }else if(currentMonsterHealth > currentPlayerHealth && currentPlayerHealth <= 0 && currentMonsterHealth >= 0){
        alert('You lose')
    }else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert('Draw')
    }

    if(currentMonsterHealth <=0 || currentPlayerHealth <= 0){
        resetGame(chosenMaxLife)
        currentPlayerHealth = chosenMaxLife;
        currentMonsterHealth = chosenMaxLife;
    }
}

function strongAttack () {

    j+=1;
    console.log('第',j,'局');

    const strongDamage = dealMonsterDamage(strongAttackValue);
    currentMonsterHealth -= strongDamage;
    console.log('monster strong attack ', strongDamage.toFixed(2))

    const strongPlayerDamage = dealPlayerDamage(strongAttackValue);
    currentPlayerHealth -= strongPlayerDamage;
    console.log('player strong attack ', strongPlayerDamage.toFixed(2))

    if(currentMonsterHealth <=0 || currentPlayerHealth <= 0){
        resetGame(chosenMaxLife)
        currentPlayerHealth = chosenMaxLife;
        currentMonsterHealth = chosenMaxLife;
    }

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click',strongAttack)