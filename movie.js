/*
My API Key: 

image api => https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg

api doc => https://developers.themoviedb.org/3/authentication

movie details => https://api.themoviedb.org/3/movie/724089?api_key=

top rated movies => https://api.themoviedb.org/3/movie/top_rated?api_key=

get videos => https://api.themoviedb.org/3/movie/724089/videos?api_key=f96ac62d92ada173838748fa0f087eef

if site is youtube get the key and paste here https://youtube.com/watch?v={key}


*/

const loadMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3ebd3035e07438188d992091e33398c2')
        .then(res => res.json())
        .then(data => setMovies(data.results))
}

loadMovies();


const setMovies = movies => {
    const movieSpinner = document.getElementById('movie-spinner')
    movieSpinner.style.display = 'none';

    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {

        const movieBox = document.createElement('div');
        movieBox.classList.add('col-md-3');

        const imageUrl = 'https://image.tmdb.org/t/p/original' + movie.poster_path;

        movieBox.innerHTML = `
        <div class="shadow rounded p-3 m-2">
            <img class="img-fluid" src=${imageUrl}>
            <h3>${movie.title}</h3>
            <p>${movie.overview.slice(0, 150)}</p>
            <button onClick="loadMovieDetails('${movie.id}')" class="btn btn-primary">See Details</button>
        </div>
        </div>
    `;
        movieContainer.appendChild(movieBox);

    })
}

const loadMovieDetails = id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3ebd3035e07438188d992091e33398c2`)
        .then(res => res.json())
        .then(data => setMovieDEtails(data))
}

const setMovieDEtails = movie => {
    const detailsBox = document.getElementById('movie-details');
    detailsBox.innerHTML = '';

    const movieBox = document.createElement('div');
    movieBox.innerHTML = `
    <h3>Movie Name: ${movie.original_title}</h3>
    <h4>Vote Average: ${movie.vote_average}</h3>
    `;
    detailsBox.appendChild(movieBox);
}