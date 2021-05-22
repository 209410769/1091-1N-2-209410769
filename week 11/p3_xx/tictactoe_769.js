const o = 'o';
const x = 'x';
let turn = 0;
const container =document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const allLi = document.querySelectorAll('#board li');

const checkWin = (player)=>{
  
  
  
  let p =[];
  allLi.forEach((li)=>{
    p.push(li.classList.contains(player));
  });
  console.log('p',p);
  const[p1,p2,p3,p4,p5,p6,p7,p8,p9]=p;
  // const p1 = allLi[0].classList.contains(player);
  // const p2 = allLi[1].classList.contains(player);
  // const p3 = allLi[2].classList.contains(player);
  // const p4 = allLi[3].classList.contains(player);
  // const p5 = allLi[4].classList.contains(player);
  // const p6 = allLi[5].classList.contains(player);
  // const p7 = allLi[6].classList.contains(player);
  // const p8 = allLi[7].classList.contains(player);
  // const p9 = allLi[8].classList.contains(player);

  if( (p1&&p2&&p3) || 
      (p4&&p5&&p6) ||
      (p7&&p8&&p9) || 
      (p1&&p4&&p7) ||
      (p2&&p5&&p8) || 
      (p3&&p6&&p9) || 
      (p1&&p5&&p9) ||
      (p3&&p5&&p7))
    return true;
  else
    return false;
}

console.log('check Win for x:',checkWin(x));
console.log('check Win for o:',checkWin(o));

const reset = () => {
  // add your code here
  allLi.forEach((li)=>{
      li.textContent='+';
      li.classList=' ';
      container.style.backgroundColor='#666'
  })
};


const winMessage=(player)=>{
  container.style.backgroundColor=
  player === 'o'?'rgba(144,238,144,0.5)':'rgba(240,118,128,0.726)';
}

allLi.forEach((item)=>{
  item.addEventListener('click',()=>{
    console.log('turn',turn);
    if(item.classList.contains('disabled')){
      alert('Already filled');
    }else if(turn%2==0){
      item.textContent ='O';
      item.classList.add('o','disabled');
      turn++;
      if(checkWin(o)){
        winMessage(o);
        // container.style.backgroundColor='rgba(144,238,144,0.5)'
        // alert('winner: o');
        // reset();
      }
    }else if(turn%2==1){
      item.textContent='X';
      item.classList.add('x','disabled');
      turn++;
       if(checkWin(x)){
         winMessage(x);
      //   container.style.backgroundColor='rgba(240,118,144,0.726)'
      //   alert('winner: x');
      //   reset();
      }
    }
    if(turn ==9){
      alert('Tie Game');
    }
  })
})

resetBtn.addEventListener('click', reset);
