const API_KEY = "98901e4a053393ed067375772dc091d2";
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const SearchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query)}`)
        ;
    const data = await response.json()
    return data.results
};

export const getPopularShows = async () => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const SearchShows = async (query) => {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(
        query)}`)
        ;
    const data = await response.json()
    return data.results
};
