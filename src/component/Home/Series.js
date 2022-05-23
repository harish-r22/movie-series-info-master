import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { featchOneMovie, setLoading } from "../../actions/searchAction";
import { Link } from "react-router-dom";
import {isMobile} from 'react-device-detect';
class Movie extends Component {
  componentDidMount() {
    console.log("props", this.props);
    this.props.featchOneMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <div className="container" >
        <div className="row">
         {isMobile?<h2  style={{marginTop:"-30px",width:"100%",textAlign:"center"}}>{movie.Title}</h2>:null}
          <div className="col-md-4 card card-body" style={isMobile?{border:"none"}:{display:"block"}}>
            <img
              src={movie.Poster}
              className="thumbnail"
              alt="Poster not available"
            />
          </div>
          <div className="col-md-8">
            {!isMobile?<h2 className="mb-4">{movie.Title}</h2>:null}
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a
                href={"https://www.imdb.com/title/" + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div style={{flex:1}}>{content}</div>;
  }
}
const mapsStateToProp = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapsStateToProp, { featchOneMovie, setLoading })(Movie);
