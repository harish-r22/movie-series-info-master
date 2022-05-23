import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container" style={{flex:1,marginTop:"-3rem"}}>
        <SearchForm></SearchForm>
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});
export default connect(mapStateToProps)(Landing);
