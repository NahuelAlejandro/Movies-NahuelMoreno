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

function createCards(movie) {
    

    let content =document.createElement("article");
    content.className = `bg-[#6d38E0] shadow-lg shadow-[#6d38E0]/50 hover:shadow-xl hover:shadow-[#6d38E0]/50 cursor-pointer rounded-lg lg:rounded-t-lg overflow-hidden flex flex-col gap-2 items-center relative h-80 w-[90%] md:w-[45%] lg:w-[28%] lg:h-[500px] `
    content.setAttribute("id",`${movie.id}`)
    content.innerHTML = `
    <span class="opacity-0 w-full absolute h-full"></span>
        <img class="object-cover h-[80%] lg:h-[55%] lg:w-full h-full " src="${movie.image}" alt="">
        <div class="w-[90%] lg:flex lg:flex-col lg:justify-around lg:gap-2  lg:static lg:h-[40%]">
            <h3 class="font-medium text-center lg:text-lg  text-white lg:py-2 ">${movie.title}</h3>
            <span class=" hidden lg:block lg:text-[#d2ccff] ">${movie.tagline}</span>
            <p class="hidden lg:block lg:text-[#d2ccff] lg:text-sm lg:py-2 lg:truncate">${movie.overview}</p>
        </div>`
    return content;
}

function printCards (moviesList, element){
    let fragment = document.createDocumentFragment();
    if (moviesList == 0){
        let h2 = document.createElement("h2")
        h2.classList= `text-[#6d38E0] font-bold text-5xl py-6`
        h2.innerHTML = `not found movies`
        fragment.append( h2) ;
    }
    for (const movie of moviesList) {
        fragment.append( createCards(movie)) ;
         
        }
         element.append(fragment);
}

printCards(movies, movieContainer)


// FILTER SEARCH

const inputSearch = document.getElementById("inputSearch");


inputSearch.addEventListener("input", ()=>{
    
    movieContainer.innerHTML = ""

    const filteredMovies = filteredMoviesTitle(movies, inputSearch.value.toLowerCase())
    

    const filteredMoviesGenres = filteredMoviesGenre(filteredMovies, selectContainer.value)

    

    printCards(filteredMoviesGenres, movieContainer)
}) 

function filteredMoviesTitle(moviesList, title) {   
    if (title == 0){
        return moviesList
    }
        return moviesList.filter((movie) => movie.title.toLowerCase().includes(title) );
  
 }



// GET GENRES

 function getGenres(moviesList){

    const genres = []

    let genre = moviesList.map(movie => movie.genres).flat()

    genre.forEach(  genre =>{
        if(!genres.includes(genre)){
            genres.push(genre)
        }
    }) 
    return genres
       
    }
    getGenres(movies)


// SELECT CONTENT   
    

    const selectContainer = document.getElementById("select")


        function createOptions(genre) {

            const options = document.createElement("option");
        
            options.innerHTML = `<option value="${genre}">${genre}</option>`

            return options
        }
        

    function printOptions(genresList, element) {
        let fragment = document.createDocumentFragment();
        
        for (const genre of genresList) {
            fragment.append( createOptions(genre)) ;
             
            }
             element.appendChild(fragment);
    }
    printOptions(getGenres(movies), select)
        
//  FILTER GENRES

    selectContainer.addEventListener("input", ()=>{

        const filteredMoviesGenres = filteredMoviesGenre(movies, selectContainer.value)

        
        
        const filteredMovies = filteredMoviesTitle(filteredMoviesGenres, inputSearch.value.toLowerCase())
        
        
       movieContainer.innerHTML = ""
    
        printCards(filteredMovies, movieContainer)
    }) 
    
    function filteredMoviesGenre(moviesList, genre) {
        
        if(genre == ""){
            return moviesList
        }
        return moviesList.filter((movie) => movie.genres.includes(genre) );
        
     }
    
// SEND DETAIL PAGE 


movieContainer.addEventListener("click", (e)=>{
    
   
    if(e.target.parentElement.localName === "article" ){
    window.location.href = `detail.html?id=${e.target.parentElement.id}`
 }
   

  
})



