import React from 'react';

export default function ({movie}) {
    return (
        <div className="eight wide column">
            <div className="custom-card">
                <div className="card-img">
                    <img src={movie.poster_path} />
                </div>
                <div className="card-content">
                    <div className="ui card">
                        <div className="content">
                            <div className="ui small header">{movie.title}</div>
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