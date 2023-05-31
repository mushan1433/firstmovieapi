// axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1413f426e96bd33478cc6d119de2ee0f&language&language=en-US&page=1").then(res => {
//     console.log(res);
// })





const leftwrap = document.querySelector(".leftwrap")
const upcomeing = document.querySelector(".upcomeing")
const headermid = document.querySelector(".headermid")
const headermidInp = document.querySelector(".headermid input")













axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1413f426e96bd33478cc6d119de2ee0f&language=en-US&page=1").then(res => {
    console.log(res.data.results);
    leftwrap.innerHTML = res.data.results.map(val => {
        return `<div class="singleMovie">
                <a href="/singleMovie.html?id=${val.id}">
                <img src="https://image.tmdb.org/t/p/w500${val.backdrop_path}">
                <div class="poptext">
                <h2>${val.title}</h2>
                <span>${val.release_date}</span>
                </div>
                </a>
            </div>
        `
    }).join("")
})



axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=1413f426e96bd33478cc6d119de2ee0f&language=en-US&page=1").then(res => {
    console.log(res.data.results);
    upcomeing.innerHTML = res.data.results.splice(0, 9).map(val => {
        return `<div class="singleitem">
                <a href="/singleMovie.html?id=${val.id}">
                <img src="https://image.tmdb.org/t/p/w500${val.backdrop_path}">
                <div class="uptext">
                <h2>${val.title}</h2>
                <span>${val.vote_average}</span>
                </div>
                </a>
            </div>
        `
    }).join("")
})



headermid.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location = `/search.html?movie=${headermidInp.value.replace(/\s/g, '-')}`
})





