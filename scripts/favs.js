import { printCards, printFavsCards, dropMenu } from "./module/functions.js";



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

        // FAVS MAIN CONTENT

        let fn = printFavsCards(movies)

        printCards (fn, favsContainer)


        favsContainer.addEventListener("click", (e) => {

            if (e.target.localName === "span") {
                window.location.href = `detail.html?id=${e.target.parentElement.id}`
            } else if (e.target.id === "favsIcon") {
                
                const button = e.target

                button.classList.toggle("bg-yellow-300")

                button.parentElement.remove()

                const favmovie = movies.find(movie => movie.id === e.target.parentElement.id)

                if (favmovie.favs) {
                    Object.assign(favmovie, obj2)

                } else {
                    Object.assign(favmovie, obj1)

                }
                localStorage.setItem("movies", JSON.stringify(movies))

            }

        })

    })
    
    // MENU MOBILE
    const openMenu = document.getElementById("menu");
    const drop = document.getElementById("dropMenu");
    const close = document.getElementById("close");

    // FAVS MAIN CONTENT
    const favsContainer = document.getElementById("favsContainer");