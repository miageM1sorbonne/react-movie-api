// Object containing various API requests for fetching movie data.

const requests = {
    fetchMovie :`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
    fetchTrending: `https://api.themoviedb.org/3//trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3//movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US` ,
    fetchActionMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3//discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=99`,
    fetchMovieDetail: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
    fetchMovieCredits: (id) => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
}
export default requests;