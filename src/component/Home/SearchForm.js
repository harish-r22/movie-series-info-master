import React, { Component } from "react";
import {
  searchMovie,
  featchMovie,
  setLoading,
} from "../../actions/searchAction";
import { connect } from "react-redux";
import { SEARCH_MOVIE } from "../../actions/actions";
import {isMobile} from 'react-device-detect';

class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.featchMovie(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          {!isMobile?<h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>:null}
          {/* <form id="searchForm" onSubmit={this.onSubmit}> */}
          {isMobile?<div className="main">
            <div className="form-group">
              <span className="fa fa-search form-control-icon" ></span>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search Movies, TV Series ..."
                onChange={this.onChange}
                onKeyPress={(e)=>{
                  console.log(e);
                }}
              />
            </div></div>:<input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />}
            <button onClick={this.onSubmit} className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});
export default connect(mapStateToProps, {
  searchMovie,
  featchMovie,
  setLoading,
})(SearchForm);
