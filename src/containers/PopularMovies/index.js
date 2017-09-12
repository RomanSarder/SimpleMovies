import React, { Component } from 'react';
import {connect} from 'react-redux';

import MoviesList from 'containers/MoviesList';

import {loadPopularMovies} from 'store/actions/movies';

export class PopularMovies extends Component {
  componentWillMount = () => {
    this.props.loadPopularMovies();
  }
  
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popular: state.movies.popular,
    config: state.config
  }
}

const mapDispatchers = {
  loadPopularMovies
}

export default connect(mapStateToProps, mapDispatchers)(PopularMovies)
