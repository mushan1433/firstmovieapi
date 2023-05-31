const movie = window.location.search.split("?movie=")[1]
const selectmovie = document.querySelector(".selectmovie")
console.log(movie);


axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1413f426e96bd33478cc6d119de2ee0f&query=${movie}`).then(res => {
  console.log(res.data.results);
  selectmovie.innerHTML = res.data.results.map(val => {
    return `<div class = singlemovie><a href="/singleMovie.html?id=${val.id}">
                  <div class="selectmovieimg">
                         <img src="https://image.tmdb.org/t/p/w500${val.backdrop_path}">
                  </div>
                  <div class="selectmovietext">
                    <h3 class="moviename">${val.original_title}</h3>
                    <span class="moviedetals">${val.overview}</span>
                  </div></a>
                </div>`
  }).join("")
})













