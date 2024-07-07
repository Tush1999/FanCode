import axios from "axios";

const API_KEY = "2dca580c2a14b55200e784d157207b4d";

const STARTING_DEFAULT_YEAR = 2012;
const DEFAULT_PAGE = 1;

export const fetchMovieList = ({
  movieYear = STARTING_DEFAULT_YEAR,
  page = DEFAULT_PAGE,
  genresId = "",
} = {}) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${movieYear}&page=${page}&vote_count.gte=100&with_genres=${genresId}`
  );
};

export const fetchAllGenres = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
};
