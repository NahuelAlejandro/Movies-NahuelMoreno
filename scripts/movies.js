import {printCards, filteredMoviesTitle, getGenres, printOptions, filteredMoviesGenre}from "./module/functions.js"


// MENU MOBILE
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



// MAIN CONTENT
const movieContainer = document.getElementById("movieContainer");



printCards(movies, movieContainer)


// FILTER SEARCH

const inputSearch = document.getElementById("inputSearch");


inputSearch.addEventListener("input", ()=>{
    
    movieContainer.innerHTML = ""

    const filteredMovies = filteredMoviesTitle(movies, inputSearch.value.toLowerCase())
    

    const filteredMoviesGenres = filteredMoviesGenre(filteredMovies, selectContainer.value)

    

    printCards(filteredMoviesGenres, movieContainer)
}) 





// GET GENRES

    getGenres(movies)


// SELECT CONTENT   
    

    const selectContainer = document.getElementById("select")


    printOptions(getGenres(movies), select)
        
//  FILTER GENRES

    selectContainer.addEventListener("input", ()=>{

        const filteredMoviesGenres = filteredMoviesGenre(movies, selectContainer.value)

        
        
        const filteredMovies = filteredMoviesTitle(filteredMoviesGenres, inputSearch.value.toLowerCase())
        
        
       movieContainer.innerHTML = ""
    
        printCards(filteredMovies, movieContainer)
    }) 
    
            

    
// SEND DETAIL PAGE 

movieContainer.addEventListener("click", (e)=>{
    
   
    if(e.target.parentElement.localName === "article" ){
    window.location.href = `detail.html?id=${e.target.parentElement.id}`
 }
   

  
})



