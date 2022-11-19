
const API = 'f4d02f14c0e5de98f5392e4d87dc5f9a';

const AllMoviesData = {
    trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API}`,
    original: `https://api.themoviedb.org/3/discover/tv?api_key=${API}&with_networks=213`,
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}`,
    documentry: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=99`,
    Web_series: `https://api.themoviedb.org/3/tv/popular?api_key=${API}&language=en-US&page=1`
}

export default AllMoviesData;