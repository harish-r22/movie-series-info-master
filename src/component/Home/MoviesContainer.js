import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
export class MoviesContainer extends Component {
  render() {
    console.log("container", this.props);
    const { movies } = this.props;
    let content = "";
    content =
      movies.Response === "True"
        ? movies.Search.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}
const mapStateToProp = (state) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProp)(MoviesContainer);
