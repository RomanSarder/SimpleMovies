import filterByText from 'helpers/filterByText';

const INITIAL_STATE = {
    nowPlaying: {
        searchText: "",
        results: [],
        display: []
    },
}

export default function (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case "SET_NOW_PLAYING_TVSERIES":
            return {
                ...state,
                nowPlaying: {
                    ...state.nowPlaying,
                    ...payload,
                    display: filterByText(payload.results, state.nowPlaying.searchText, "name")
                }
            }
        case "SET_NOW_PLAYING_SEARCH_TEXT":
            return {
                ...state,
                nowPlaying: {
                    ...state.nowPlaying,
                    searchText: payload,
                    display: filterByText(state.nowPlaying.results, payload, "name")
                }
            }
        default:
            return state;
    }
}