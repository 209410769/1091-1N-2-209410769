function changeVideo(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 3:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}

function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<img src="./images/TKU1.png" style="width:100%; height: auto" />`;
      break;
    case 2:
      player.innerHTML =
        '<img src="./images/TKU2.png" style="width:100%; height: auto" />';
      break;
    case 3:
      player.innerHTML = `<img src="./images/TKU3.png" style="width:100%; height: auto" />`;
      break;
    case 4:
      player.innerHTML = `<img src="./images/TKU4.png" style="width:100%; height: auto"/>`;
      break;
    case 5:
      player.innerHTML = `<img src="./images/TKU5.png" style="width:100%; height: auto"/>`;
      break;
  }
}

function changeColor(index) {
  const p = document.querySelector('#section');
  switch (index) {
    case 1:
      p.style.backgroundColor = 'yellow';
      break;
    case 2:
      p.style.backgroundColor = 'azure';
      break;
    case 3:
      p.style.backgroundColor = 'black';
      break;
  }
}

function showTKU60(){
  const p = document.querySelector('#menu2');
  console.log('p',p);
  p.innerHTML=` 
  <ul>
  <li onclick="changeImage(1)">
    <a href="#">淡江大戲 1</a>
  </li>
  <li onclick="changeImage(2)">
    <a href="#">淡江大戲 2</a>
  </li>
  <li onclick="changeImage(3)">
    <a href="#">淡江大戲 3</a>
  </li>
  <li onclick="changeImage(4)">
    <a href="#">淡江大戲 4</a>
  </li>
  <li onclick="changeImage(5)">
    <a href="#">淡江大戲 5</a>
  </li>
</ul>`;
}

function clearMenu2All(){
  const p = document.querySelector('#menu2');
  console.log('p',p);
  p.innerHTML=``;
}

const toggleDiv = ()=>{
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');
  resetDiv();
  p1.classList = 'invisible';
  p2.style.width = '80%';
}

const resetDiv = () =>{
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');
  p1.style.width = '20%';
  p2.style.width = '60%';
  p3.style.width = '20%';

  p1.classList='';
  p2.classList='';
  p3.classList='';

  const p = document.querySelector('#menu1');
  console.log('p',p);
  p.innerHTML=` `;
}

const invisibleDiv = ()=>{
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');
  resetDiv();
  p3.classList = 'invisible';
  p2.style.width = '80%';

  const p = document.querySelector('#menu1');
  console.log('p',p);
  p.innerHTML=` 
  <ul>
  <li onclick="changeImage(1)">
    <a href="#">淡江大戲 1</a>
  </li>
  <li onclick="changeImage(2)">
    <a href="#">淡江大戲 2</a>
  </li>
  <li onclick="changeImage(3)">
    <a href="#">淡江大戲 3</a>
  </li>
  <li onclick="changeImage(4)">
    <a href="#">淡江大戲 4</a>
  </li>
  <li onclick="changeImage(5)">
    <a href="#">淡江大戲 5</a>
  </li>
</ul>`;

}
