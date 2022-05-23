//combin all rducers in to ingle reducers
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
export default combineReducers({
  movies: searchReducer,
});
