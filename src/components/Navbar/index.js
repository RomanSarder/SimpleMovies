import React from 'react';
import {NavLink} from 'react-router-dom';

export default function () {
    return (
        <div className="ui menu" style={{marginTop: "20px"}}>
            <NavLink className="item" to="/popular" activeClassName="active">Popular</NavLink>
            <NavLink className="item" to="/now_playing" activeClassName="active">Now Playing</NavLink>
        </div>
    )
}