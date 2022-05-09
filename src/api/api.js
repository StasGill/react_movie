import axios from "axios";

const key = "2a235b91059bbee0cb0dad81130d7be";
const address = "https://api.themoviedb.org/3/";

const API = axios.create({ baseURL: address });

export const fetchTrend = (page = 1) =>
  API.get(`trending/all/day?api_key=${key}b&page=${page}&language=en`);

export const getMovieById = (id, params = "") =>
  API.get(`movie/${id}${params}?api_key=${key}b&language=en`);

export const getCastById = (id) =>
  API.get(`movie/${id}/credits?api_key=${key}b&language=en`);

export const getSearchById = (query) =>
  API.get(
    `search/movie?api_key=${key}b&language=en&include_adult=false&query=${query}`
  );
