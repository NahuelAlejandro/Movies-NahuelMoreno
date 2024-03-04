import { printCards, filteredMoviesTitle, getGenres, printOptions, filteredMoviesGenre, dropMenu } from "./module/functions.js"
let movies = []


const obj1 = { favs: true }
const obj2 = { favs: false }

const url = "https://moviestack.onrender.com/api/movies"
const init = {
    method: "GET",
    headers: {
        'x-api-key': "a15ddeac-fde6-4e38-84a7-084ba4dd7f04"
    }
}
fetch(url, init)
    .then(response => response.json())
    .then(data => {
        movies = data.movies

        let moviesFavs = JSON.parse(localStorage.getItem("movies"))
        if (moviesFavs) {
            movies = moviesFavs
            
        }

        // MENU MOBILE
        openMenu.addEventListener("click", () => {
            dropMenu(openMenu, drop, close)
        });

        close.addEventListener("click", () => {
            dropMenu(openMenu, drop, close)
        })

      
         // MAIN CONTENT
         printCards(movies, movieContainer)


        // FILTER SEARCH
        inputSearch.addEventListener("input", () => {

            movieContainer.innerHTML = ""

            const filteredMovies = filteredMoviesTitle(movies, inputSearch.value.toLowerCase())


            const filteredMoviesGenres = filteredMoviesGenre(filteredMovies, selectContainer.value)



            printCards(filteredMoviesGenres, movieContainer)
        })



        // GET GENRES

        getGenres(movies)

        // SELECT CONTENT 
        printOptions(getGenres(movies), select)

        //  FILTER GENRES

        selectContainer.addEventListener("input", () => {

            const filteredMoviesGenres = filteredMoviesGenre(movies, selectContainer.value)



            const filteredMovies = filteredMoviesTitle(filteredMoviesGenres, inputSearch.value.toLowerCase())


            movieContainer.innerHTML = ""

            printCards(filteredMovies, movieContainer)
        })

        // SEND DETAIL PAGE 

        movieContainer.addEventListener("click", (e) => {
            console.log(e.target)
            if (e.target.localName === "span") {
                window.location.href = `detail.html?id=${e.target.parentElement.id}`
            } else if (e.target.localName === "img" ) {
                
                const button = e.target.parentElement
                
                button.classList.toggle("bg-yellow-300")
                 

                const favmovie = movies.find(movie => movie.id === e.target.parentElement.parentElement.id)


                if (favmovie.favs) {
                    Object.assign(favmovie, obj2)

                } else {
                    Object.assign(favmovie, obj1)

                    
                }
                localStorage.setItem("movies", JSON.stringify(movies))

              


            }

        })


        



    })
    .catch(err => console.error(err))



// MENU MOBILE
const openMenu = document.getElementById("menu");
const drop = document.getElementById("dropMenu");
const close = document.getElementById("close");

// MAIN CONTENT
const movieContainer = document.getElementById("movieContainer");




// FILTER SEARCH
const inputSearch = document.getElementById("inputSearch");

// SELECT CONTENT   
const selectContainer = document.getElementById("select")




