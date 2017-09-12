import React, { Component } from 'react';
import {connect} from 'react-redux';

import MoviesList from 'containers/MoviesList';

import {loadNowPlayingMovies} from 'store/actions/movies';

export class NowPlayingMovies extends Component {
  componentWillMount = () => {
    this.props.loadNowPlayingMovies();
  }

  handleNewPage = (page) => {
    if (this.props.nowPlaying.page !== page) {
      this.props.loadNowPlayingMovies(page);
    }
  }
  
  render() {
    let {config, nowPlaying} = this.props;
    let nowPlayingExist = nowPlaying.results.length > 0;
    let configExist = Object.keys(config).length > 0;
    return (
      <div>
        {nowPlayingExist && configExist && 
        <MoviesList 
          movies={nowPlaying} 
          config={config}
          onPageChanged={this.handleNewPage}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.movies.nowPlaying,
    config: state.config
  }
}

const mapDispatchers = {
  loadNowPlayingMovies,
}

export default connect(mapStateToProps, mapDispatchers)(NowPlayingMovies)
