import React from 'react';

export default function ({movie, nameKey}) {
    return (
        <div className="eight wide column">
            <div className="custom-card">
                <div className="card-img">
                    <img className="ui bordered image" src={movie.poster_path} alt="" />
                </div>
                <div className="card-content">
                    <div className="ui card">
                        <div className="content">
                            <div className="ui small header">{movie[nameKey]}</div>
                            <div className="meta">
                                <span>Rating: {movie.vote_average}</span>
                                <span>Release: {movie.release_date}</span>
                            </div>
                        </div>
                        <div className="content">
                            <div className="description">
                                {movie.overview}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}