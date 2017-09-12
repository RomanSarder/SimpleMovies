import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from 'containers/Navbar';
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
        <Navbar onSearchTextChange={this.props.setSearchText}/>
        <Switch>
          <Route path="/popular" component={Popular}/>
          <Route path="/now_playing" component={NowPlaying}/>
          <Route exact path="/" render={() => (<Redirect to="/popular"/>)}/> 
        </Switch>
      </div>);
  }
}

const mapDispatchers = {
  loadConfig,
  setSearchText: text => dispatch => dispatch({
    type: "SET_SEARCH_TEXT",
    payload: text
  })
}

export default withRouter(connect(null, mapDispatchers)(App));
