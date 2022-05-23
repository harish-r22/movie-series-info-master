import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" style={{objectFit: "contain",flex:1}}/>
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={`/${movie.Type==="series"?"series":"movie"}/${movie.imdbID}`}>
            {movie.Type==="series"?"Series Details":"Movie Details"}
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}
