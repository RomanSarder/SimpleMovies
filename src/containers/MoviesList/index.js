import React, {Component} from 'react';
import {connect} from 'react-redux';
import includeImages from 'helpers/includeImages';

import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';

import "./index.css";

export class MoviesList extends Component {
    componentWillReceiveProps(nextProps) {
      if (nextProps.movies.page !== this.props.movies.page) {
        window.scrollTo(0,0)
      }
    }

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
            <div className="ui grid centered container">
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

export default connect()(MoviesList);