// MAIN CONTENT

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
                 <span class="lg:text-[#d2ccff] lg:text-sm lg:text-center ">Click Read More</span>
             </section>
        </div>`

    return content;
     }



export function printCards (moviesList, element){
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



// FILTER SEARCH

export function filteredMoviesTitle(moviesList, title) {   
    if (title == 0){
        return moviesList
    }
        return moviesList.filter((movie) => movie.title.toLowerCase().includes(title) );
  
 }

 // GET GENRES

export function getGenres(moviesList){

    const genres = []

    let genre = moviesList.map(movie => movie.genres).flat()

    genre.forEach(  genre =>{
        if(!genres.includes(genre)){
            genres.push(genre)
        }
    }) 
    return genres
       
    }

    // SELECT CONTENT 

    
    function createOptions(genre) {

        const options = document.createElement("option");
    
        options.innerHTML = `<option value="${genre}">${genre}</option>`

        return options
    }
    

export function printOptions(genresList, element) {
    let fragment = document.createDocumentFragment();
    
    for (const genre of genresList) {
        fragment.append( createOptions(genre)) ;
         
        }
         element.appendChild(fragment);
}

//  FILTER GENRES
 export function filteredMoviesGenre(moviesList, genre) {
        
    if(genre == "allGenres"){
        return moviesList
    }
    return moviesList.filter((movie) => movie.genres.includes(genre) );
    
 }

//  Deatils



export function createArticle(movie,element) {
   
    let fragment = document.createDocumentFragment();
    let article = document.createElement("article");
    article.classList = `w-[90%]  flex flex-col lg:flex-row lg:justify-around gap-5`
    article.innerHTML = `
    <img class="rounded xl:w-[550px]" src="${movie.image}" alt="${movie.title}">
    <div class="flex xl:w-[57%] flex-col justify-around gap-3">
        <h2 class="text-5xl text-[#6d38E0] font-bold">${movie.title}</h2>
        <h3 class="text-2xl text-[#6d38E0] font-semibold">${movie.tagline}</h3>
        <div class="flex flex-wrap gap-3" id="genresContainer"></div>
        <p >${movie.overview}</p>
    </div>
    `
    fragment.append(article)
    
    element.append(fragment)
}

export function createSpan(genres, element){
    let fragment = document.createDocumentFragment()
    for (const genre of genres) {
        let span = document.createElement("span")
        span.classList = `px-2 bg-[#6d38E0] text-[#d2ccff] rounded uppercase font-semibold`
        span.innerHTML = `<span class="">${genre}</span>`
        fragment.append(span)
    } element.append(fragment)
}

export function createTable(movie, element) {
    

    let fragment = document.createDocumentFragment();
        let div = document.createElement("div")
        div.classList = `w-full  flex justify-center`
        div.innerHTML= `
        <table class="w-[90%] h-full text-[#6d38E0] flex flex-col md:flex-row items-center justify-around gap-3">
            <tbody >
                <tr>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1 rounded-xl">Original language</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">${movie.original_language}</td>
                </tr>
                <tr >
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">Release date</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">${movie.release_date}</td>
                </tr>
                <tr >
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">Runtime</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">${movie.runtime}</td>
                </tr>
                <tr >
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">Status</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">${movie.status}</td>
                </tr>
                
            </tbody>
            <tbody>
                <tr >
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">Vote average</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">${movie.vote_average}</td>
                </tr>
                <tr >
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">Budget</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">$ ${movie.budget.toLocaleString()}</td>
                </tr>
                <tr >
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">Revenue</td>
                    <td class="border-2 w-36 h-10 md:w-52 xl:w-96 xl:h-14 border-[#6d38E0] font-semibold indent-1">$ ${movie.revenue.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
        `
        
        fragment.append(div)
    
        element.append(fragment)
    }