import React from 'react';
import includeImages from 'helpers/includeImages';

import MovieCard from 'components/MovieCard';

import "./index.css";

export default function ({movies, config}) {
    let moviesWithImg = includeImages(movies, config)
    console.log(moviesWithImg);
    return (
        <div className="ui grid container">
            {moviesWithImg.results.map((movie, i) => {
                return (
                    <MovieCard movie={movie} key={i}/>
                )
            })}
        </div>
    )
}