import React from 'react';
import includeImages from 'helpers/includeImages';

export default function ({movies, config}) {
    let moviesWithImg = includeImages(movies, config)
    console.log(moviesWithImg);
    return (
        <div className="ui grid container">
            {/* <div class="four wide column"></div>
            <div class="four wide column"></div>
            <div class="four wide column"></div>
            <div class="four wide column"></div>
            <div class="four wide column"></div>
            <div class="four wide column"></div>
            <div class="four wide column"></div>
            <div class="four wide column"></div> */}

        </div>
    )
}