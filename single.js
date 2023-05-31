const movieId = window.location.search.split("?id=")[1]
const movieImg = document.querySelector(".movieImg")
const movieName = document.querySelector(".movieName")
const posterWrap = document.querySelector(".posterWrap")
const movieDate = document.querySelector(".movieDate")
const movieoverview = document.querySelector(".movieoverview")
const posters = document.querySelector(".posters")
const singlerec = document.querySelector(".singlerec")
const headermid = document.querySelector(".headermid")
const headermidInp = document.querySelector(".headermidInp")
const catagory = document.querySelector(".catagory")



// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1413f426e96bd33478cc6d119de2ee0f&language=en-US`).then(res => {
    console.log(res.data);
    movieImg.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${res.data.backdrop_path}">`
    movieName.innerHTML = res.data.title
    movieDate.innerHTML = res.data.release_date
    movieoverview.innerHTML = res.data.overview
    catagory.innerHTML = res.data.genres.map(val => {
        return `<li>${val.name}</li>`
    }).join("")
})



axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=1413f426e96bd33478cc6d119de2ee0f`).then(res => {
    console.log(res.data);
    posters.innerHTML = res.data.posters.splice(0, 4).map(val => {
        return `<img src="https://image.tmdb.org/t/p/w500${val.file_path}">`
    }).join("")
})



axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1413f426e96bd33478cc6d119de2ee0f&language=en-US&page=1").then(res => {
    console.log(res.data.results);
    singlerec.innerHTML = res.data.results.splice(0, 9).map(val => {
        return `<div class="singleitem">
                <a href="/singleMovie.html?id=${val.id}">
                <img src="https://image.tmdb.org/t/p/w500${val.backdrop_path}">
                <div class="uptext">
                <h2>${val.title}</h2>
                </div>
                </a>
            </div>
        `
    }).join("")
})


headermid.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log()
    window.location = `/search.html?movie=${headermidInp.value.replace(/\s/g, '-')}`
})










