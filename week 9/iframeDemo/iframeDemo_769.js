function goPage(index){
    const player = document.querySelector('main');
    switch(index){
        case 1:
            player.innerHTML = `<iframe width="100%" height="700" src="./w01-intro-pokemon/pokemon.html" title="YouTube video player" ></iframe>`
            break;
        case 2:
            player.innerHTML = `<iframe width="100%" height="700" src="./w02-imgal-imageGallery"title="YouTube video player" ></iframe>`
            break;
        case 3:
            player.innerHTML = `<iframe width="100%" height="700" src="./w09_tku60_76-no-js/div_tku60_769.html" title="YouTube video player" ></iframe>`
            break;   
    }
}