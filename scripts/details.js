import{createArticle, createSpan, createTable, dropMenu}from "./module/functions.js"

let movies = []
const url = "https://moviestack.onrender.com/api/movies"
const init = {
  method : "GET",
  headers : {
    'x-api-key' : "a15ddeac-fde6-4e38-84a7-084ba4dd7f04"
  }
}
fetch(url, init)
.then( response => response.json() )
.then(data => {
    movies = data.movies
    

    // MENU MOBILE
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
    
    createArticle(movie, mainContent)

    // Genre Tag
    const gen = document.getElementById("genresContainer");
    createSpan(movie.genres, gen)
    
    // Movie Table
    createTable(movie, mainContent)
})
.catch(err => console.error(err))



    // MENU MOBILE
    const openMenu = document.getElementById("menu");
    const drop = document.getElementById("dropMenu");
    const close = document.getElementById("close");

    // Details Movie
    const mainContent = document.getElementById("mainContent");














