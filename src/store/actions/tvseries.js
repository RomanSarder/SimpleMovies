import client from 'helpers/client';

export function setNowPlayingSeries(payload) {
    return {
        type: "SET_NOW_PLAYING_TVSERIES",
        payload
    }
}

export function loadNowPlayingSeries (page = 1) {
    return async dispatch => {
        try {
            let response = await client.get("/tv/on_the_air", {params: {page}});
            dispatch(setNowPlayingSeries(response.data));            
        } catch (e) {
            console.log(e);
        }
    }
}