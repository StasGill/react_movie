import {
  END_LOADING,
  GET_CAST,
  GET_MOVIE,
  GET_SEARCH,
  GET_TREND,
  RESET,
  START_LOADING,
} from "../actions/const";

const userReducer = (
  state = { isLoading: false, trend: {}, movie: {}, cast: {}, search: {} },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_TREND:
      return { ...state, trend: action?.data };
    case GET_MOVIE:
      return { ...state, movie: action?.data, cast: action?.crew };
    case GET_CAST:
      return { ...state, cast: action?.data };
    case GET_SEARCH:
      return { ...state, search: action?.data };
    case RESET:
      return { ...state, movie: {} };
    default:
      return state;
  }
};

export default userReducer;
