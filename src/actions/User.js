import {
  fetchTrend,
  getCastById,
  getMovieById,
  getSearchById,
} from "../api/api.js";
import {
  GET_TREND,
  END_LOADING,
  START_LOADING,
  GET_MOVIE,
  GET_CAST,
  GET_SEARCH,
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

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getMovieById(id);
    const cast = await getCastById(id);
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

export const getSearch = (query) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getSearchById(query);
    console.log("action", data);
    dispatch({ type: GET_SEARCH, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: END_LOADING });
  }
};
