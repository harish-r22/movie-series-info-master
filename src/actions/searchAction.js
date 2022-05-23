import {
  SEARCH_MOVIE,
  FEATCH_MOVIE,
  FEATCH_ONEMOVIE,
  SETLOADING,
} from "./actions";
import APIKEY from "../APIKEY";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const featchMovie = (text) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?apikey=dddc1290&s=${text}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FEATCH_MOVIE,
        payload: data,
      })
    )
    .catch((e) => console.log(e));
};

export const featchOneMovie = (id) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?apikey=dddc1290&i=${id}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FEATCH_ONEMOVIE,
        payload: data,
      })
    )
    .catch((e) => console.log(e));
};

export const setLoading = () => ({
  type: SETLOADING,
});
