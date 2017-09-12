import React, { Component } from 'react';
import {connect} from 'react-redux';

import MoviesList from 'containers/MoviesList';

import {loadNowPlayingSeries} from 'store/actions/tvseries';

export class NowPlayingSeries extends Component {
  componentWillMount = () => {
    this.props.loadNowPlayingSeries();
  }

  handleNewPage = (page) => {
    if (this.props.nowPlaying.page !== page) {
      this.props.loadNowPlayingSeries(page);
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
          nameKey="original_name"
          movies={nowPlaying} 
          config={config}
          section="NOW_PLAYING"
          onPageChanged={this.handleNewPage}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.tvseries.nowPlaying,
    config: state.config
  }
}

const mapDispatchers = {
  loadNowPlayingSeries,
}

export default connect(mapStateToProps, mapDispatchers)(NowPlayingSeries)
