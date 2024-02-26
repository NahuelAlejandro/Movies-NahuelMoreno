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


const urlSearchParams = new URLSearchParams(location.search) 

const id = urlSearchParams.get("id");


const movie = movies.find(movie => movie.id == id);

const mainContent = document.getElementById("mainContent");



function createArticle(movie,element) {
   
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
createArticle(movie, mainContent)


const gen = document.getElementById("genresContainer");

function createSpan(genres, element){
    let fragment = document.createDocumentFragment()
    for (const genre of genres) {
        let span = document.createElement("span")
        span.classList = `px-2 bg-[#6d38E0] text-[#d2ccff] rounded uppercase font-semibold`
        span.innerHTML = `<span class="">${genre}</span>`
        fragment.append(span)
    } element.append(fragment)
}
createSpan(movie.genres, gen)



function createTable(movie, element) {
    

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
createTable(movie, mainContent)




