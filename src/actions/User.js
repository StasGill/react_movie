import {
  fetchTrend,
  findMovie,
  getActorById,
  getActorByIdMovie,
  getActorByIdSocial,
  getCastById,
  getMovieById,
} from "../api/api.js";
import {
  GET_TREND,
  END_LOADING,
  START_LOADING,
  GET_MOVIE,
  GET_CAST,
  GET_SEARCH,
  RESET,
  GET_ACTOR,
} from "./const.js";

const empty = {};

export const getTrend = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await fetchTrend(page);

    dispatch({ type: GET_TREND, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: END_LOADING });
  }
};

export const getMovie = (id, type) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getMovieById(id, type);
    const cast = await getCastById(id, type);
    const crew = cast.data;
    dispatch({ type: GET_MOVIE, data, crew });
    dispatch({ type: END_LOADING });
  } catch (error) {
    // console.log(error);
    dispatch({ type: GET_MOVIE, empty });
    dispatch({ type: GET_CAST, empty });
    dispatch({ type: END_LOADING });
  }
};

export const getActor = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getActorById(id);
    const { data: links } = await getActorByIdSocial(id);
    const { data: movie } = await getActorByIdMovie(id);

    dispatch({ type: GET_ACTOR, data, links, movie });
    dispatch({ type: END_LOADING });
  } catch (error) {}
};

export const getSearch = (query, type, page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await findMovie(query, type, page);

    dispatch({ type: GET_SEARCH, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: END_LOADING });
  }
};

export const reset = () => async (dispatch) => {
  dispatch({ type: RESET });
};
