import React, { Component } from 'react';
import {connect} from 'react-redux';

import MoviesList from 'containers/MoviesList';

import {loadPopularMovies} from 'store/actions/movies';

export class PopularMovies extends Component {
  componentWillMount = () => {
    this.props.loadPopularMovies();
  }
  
  render() {
    let {config, popular} = this.props;
    let popularExist = popular.results.length > 0;
    let configExist = Object.keys(config).length > 0;
    return (
      <div>
        {popularExist && configExist && <MoviesList movies={popular} config={config}/>}
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
