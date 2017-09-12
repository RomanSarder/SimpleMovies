import React, { Component } from 'react';
import {connect} from 'react-redux';

import MoviesList from 'containers/MoviesList';

import {loadPopularMovies} from 'store/actions/movies';

export class PopularMovies extends Component {
  componentWillMount = () => {
    this.props.loadPopularMovies();
  }

  handleNewPage = (page) => {
    if (this.props.popular.page !== page) {
      this.props.loadPopularMovies(page);
    }
  }
  
  render() {
    let {config, popular} = this.props;
    let popularExist = popular.results.length > 0;
    let configExist = Object.keys(config).length > 0;
    return (
      <div>
        {popularExist && configExist && 
        <MoviesList
          nameKey="title"
          movies={popular} 
          config={config}
          section="POPULAR_MOVIES"
          onPageChanged={this.handleNewPage}/>}
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
  loadPopularMovies,
}

export default connect(mapStateToProps, mapDispatchers)(PopularMovies)
