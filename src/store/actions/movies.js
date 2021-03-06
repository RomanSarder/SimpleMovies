import client from 'helpers/client';

export function setPopularMovies(payload) {
    return {
        type: "SET_POPULAR_MOVIES",
        payload
    }
}

export function loadPopularMovies (page = 1) {
    return async dispatch => {
        try {
            let response = await client.get("/movie/popular", {params: {page}});
            dispatch(setPopularMovies(response.data));            
        } catch (e) {
            console.log(e);
        }
    }
}