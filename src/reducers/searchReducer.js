import {
  FEATCH_MOVIE,
  SEARCH_MOVIE,
  FEATCH_ONEMOVIE,
  SETLOADING,
} from "../actions/actions";
import { setLoading } from "../actions/searchAction";
const initialState = {
  text: "",
  movies: {},
  loading: false,
  movie: [],
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FEATCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case FEATCH_ONEMOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SETLOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
