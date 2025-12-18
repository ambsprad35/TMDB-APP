/*
  tmdb.js
  This file fetches the movie and tv show data from the TMDB api. 
*/

import { TMDB_API_KEY, TMDB_BASE_URL } from './config';

export const fetchTrendingMovies = async () => {
  const res = await fetch(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
  );
  return res.json();
};

export const fetchTrendingTV = async () => {
  const res = await fetch(
    `${TMDB_BASE_URL}/trending/tv/week?api_key=${TMDB_API_KEY}`
  );
  return res.json();
};
