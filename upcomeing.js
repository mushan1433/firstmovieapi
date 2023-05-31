const wrap = document.querySelector(".wrap")









axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=1413f426e96bd33478cc6d119de2ee0f&language=en-US&page=1").then(res => {
    console.log(res.data);
    wrap.innerHTML = res.data.results.map(val => {
        return `<div class="singleMovie">
                <a href="/singleMovie.html?id=${val.id}">
                <img src="https://image.tmdb.org/t/p/w500${val.backdrop_path}">
                <div class="text">
                <h2>${val.title}</h2>
                <span>${val.vote_average}</span>
                </div>
                </a>
            </div>
        `
    }).join("")
})
