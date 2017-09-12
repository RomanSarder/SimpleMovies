import React, {Component} from 'react';
import {connect} from 'react-redux';
import includeImages from 'helpers/includeImages';

import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';

import "./index.css";

export class MoviesList extends Component {
    state = {
        current: 1,

    }
    render() {
        let {movies, config} = this.props;
        let {current} = this.state;
        let moviesWithImg = includeImages(movies, config)
        return (
            <div className="ui grid container">
                {moviesWithImg.results.map((movie, i) => {
                    return (
                        <MovieCard movie={movie} key={i} />
                    )
                })}
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