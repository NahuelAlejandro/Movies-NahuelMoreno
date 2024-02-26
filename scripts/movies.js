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
    content.className = ` shadow-lg shadow-[#6d38E0]/50 hover:shadow-xl hover:shadow-[#6d38E0]/50 cursor-pointer rounded-lg lg:rounded-t-lg overflow-hidden flex flex-col gap-2 items-center relative h-80 w-[90%] md:w-[45%] lg:w-[28%] lg:h-[500px] group lg:[perspective:500px] `
    content.setAttribute("id",`${movie.id}`)
    content.innerHTML = `<span class="opacity-0 w-full absolute h-full z-[1]"></span>
        <div class="relative h-full w-full lg:transition-all lg:duration-500 lg:[transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] ">
            <section class="lg:absolute bg-[#6d38E0] inset-0  w-full h-full ">
                <img class="object-cover w-full h-[88%]" src="${movie.image}" alt="${movie.title}">
                <h3 class="font-medium py-1 text-center text-lg  text-white  ">${movie.title}</h3>
            </section>
             <section class="lg:absolute lg:inset-0 lg:h-full  lg:bg-[#6d38E0]  w-full px-6 lg:flex lg:flex-col lg:justify-around lg:gap-2 lg:[transform:rotateY(180deg)] lg:[backface-visibility:hidden]">
                 <h3 class="lg:font-medium lg:text-center lg:text-3xl  lg:text-white lg:py-2 ">${movie.title}</h3>
                 <span class=" lg:text-white text-lg font-semibold">Tagline: <span class=" lg:text-[#d2ccff] ">${movie.tagline}</span></span>
                 <span class=" lg:text-white text-lg font-semibold "> Description:
                 <p class="lg:text-[#d2ccff] lg:text-base lg:py-2 ">${movie.overview} </p>
                 </span>
                 <span class="lg:text-[#d2ccff] lg:text-sm lg:text-center">Click Read More</span>
             </section>
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
        
        if(genre == "allGenres"){
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



