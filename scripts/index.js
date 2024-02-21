const openMenu = document.getElementById("menu");
const drop = document.getElementById("dropMenu");
const close = document.getElementById("close");

function dropMenu(){
    drop.classList.toggle("hidden"); 
    openMenu.classList.toggle("hidden");
    close.classList.toggle("hidden");
}

openMenu.addEventListener("click",dropMenu );



close.addEventListener("click", dropMenu)
