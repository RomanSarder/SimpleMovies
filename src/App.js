import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Popular from "containers/PopularMovies";
import NowPlaying from "containers/NowPlayingMovies";

import {loadConfig} from 'store/actions/config';

class App extends Component {
  componentWillMount = () => {
    this.props.loadConfig();
  }
  
  render() {
    return (
      <div className="ui grid">
        <Switch>
          <Route path="/popular" component={Popular}/>
          <Route path="/now_playing" component={NowPlaying}/>
          <Route exact path="/" render={() => (<Redirect to="/popular"/>)}/> 
        </Switch>
      </div>);
  }
}

const mapDispatchers = {
  loadConfig
}

export default connect(null, mapDispatchers)(App);
