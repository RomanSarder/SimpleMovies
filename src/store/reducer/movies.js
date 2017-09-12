const INITIAL_STATE = {
    popular: {
        results: []
    },
    nowPlaying: {
        results: []
    }
}

export default function (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case "SET_POPULAR_MOVIES":
            return {
                ...state,
                popular: payload
            }
        case "SET_NOW_PLAYING_MOVIES":
            return {
                ...state,
                nowPlaying: payload
            }
        default:
            return state;
    }
}