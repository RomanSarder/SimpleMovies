import {combineReducers} from "redux";

import moviesReducer from './movies';
import configReducer from './config';

// Use ES6 object literal shorthand syntax to define the object shape
const reducer = combineReducers({
   movies: moviesReducer,
   config: configReducer
});

export default reducer;