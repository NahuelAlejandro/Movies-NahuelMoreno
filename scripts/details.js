import{createArticle, createSpan, createTable, dropMenu}from "./module/functions.js"

const openMenu = document.getElementById("menu");
const drop = document.getElementById("dropMenu");
const close = document.getElementById("close");



 

openMenu.addEventListener("click",()=>{
    dropMenu(openMenu, drop, close)
});



close.addEventListener("click", ()=>{
    dropMenu(openMenu, drop, close)
});

// Details Movie
const urlSearchParams = new URLSearchParams(location.search) 

const id = urlSearchParams.get("id");


const movie = movies.find(movie => movie.id == id);

const mainContent = document.getElementById("mainContent");



createArticle(movie, mainContent)


const gen = document.getElementById("genresContainer");

// Genre Tag
createSpan(movie.genres, gen)


// Movie Table

createTable(movie, mainContent)




