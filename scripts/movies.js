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


const movieContainer = document.getElementById("movieContainer");

function createCards(movie) {
    

    let content =document.createElement("article");
    content.className = `bg-[#6d38E0] shadow-lg shadow-[#6d38E0]/50 hover:shadow-xl hover:shadow-[#6d38E0]/50 cursor-pointer rounded-lg lg:rounded-t-lg overflow-hidden flex flex-col gap-2 items-center  h-80 w-[45%] lg:w-[22%] lg:h-[450px] `
    content.innerHTML = `
        <img class="object-cover h-[80%] lg:h-[55%] lg:w-full h-full " src="${movie.image}" alt="">
        <div class="w-[90%] lg:flex lg:flex-col lg:gap-2 pb-4 lg:static lg:h-[40%]">
            <h3 class="font-medium text-center lg:text-lg  text-white lg:py-2 ">${movie.title}</h3>
            <span class=" hidden lg:block lg:text-[#d2ccff] ">${movie.tagline}</span>
            <p class="hidden lg:block lg:text-[#d2ccff] lg:text-sm lg:py-2 lg:truncate">${movie.overview}</p>
        </div>`
    return content;
}

function printCards (movies, element){
    let fragment = document.createDocumentFragment();

    for (const movie of movies) {
        fragment.append( createCards(movie) ) ;
         
        }
         element.appendChild(fragment);
}

printCards(movies,movieContainer )