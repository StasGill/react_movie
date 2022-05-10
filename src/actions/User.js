import {
  fetchTrend,
  findMovie,
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
} from "./const.js";

const empty = {};

export const getTrend = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await fetchTrend();
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

export const getSearch = (query, type) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await findMovie(query, type);

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
