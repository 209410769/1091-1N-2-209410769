function changeVideo(index){
    const player = document.querySelector('#player');
    switch(index){
        case 1:
            player.innerHTML= `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope;picture-in-picture" allowfullscreen></iframe>`
        break;
        
        case 2:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
        
        case 3:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
        
        case 4:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
        
        case 5:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
    }
}

function changeColor(index){
    const p = document.querySelectorAll('#section');
    switch(index){
        case 1:
            p.style.backgroundColor = 'yellow'
        break;
        
        case 2:
            p.style.backgroundColor = 'gray'
        break;

        case 3:
            p.style.backgroundColor = 'black'
        break;
    }
}

function changeImg(index){
    const
}