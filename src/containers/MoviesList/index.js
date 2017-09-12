import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import debounce from 'lodash.debounce';

import includeImages from 'helpers/includeImages';

import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';

import "./index.css";

export class MoviesList extends Component {
    state = {
        searchText: ""
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.movies.page !== this.props.movies.page) {
        window.scrollTo(0,0)
      }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.searchText !== prevState.searchText) this.search();
    }

    componentWillUnmount = () => {
        this.props.searchText("", this.props.section);
    }
    

    handleSearchTextChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    search = debounce(() => {
        this.props.setSearchText(this.state.searchText, this.props.section);
    }, 600)

    renderMovieCards = (movies) => {
        if (movies.display.length > 0) {
            return movies.display.map((movie, i) => {
                return (
                    <MovieCard movie={movie} key={i} nameKey={this.props.nameKey} />
                )
            })
        } else {
            return <p>No movies on this page fits your search criteria</p>
        }
    }
    
    render() {
        let {movies, config} = this.props;
        let moviesWithImg = includeImages(movies, config)
        return (
            <div className="ui grid two column centered container">
                <div className="row twelve column centered">
                    <div className="column centered">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." onChange={this.handleSearchTextChange}/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </div>
                {this.renderMovieCards(moviesWithImg)}
                <Pagination
                    current={movies.page}
                    total={movies.total_results}
                    onPageChanged={this.props.onPageChanged}
                />
            </div>
        )
    }
}

const mapDispatchers = {
    setSearchText: (text,section) => dispatch => dispatch({
        type: "SET_" + section + "_SEARCH_TEXT",
        payload: text
      })
}

export default withRouter(connect(null, mapDispatchers)(MoviesList));