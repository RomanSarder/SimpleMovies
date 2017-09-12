import filterByText from 'helpers/filterByText';

const INITIAL_STATE = {
    searchText: "",
    popular: {
        results: [],
        display: []
    },
    nowPlaying: {
        results: [],
        display: []
    }
}

export default function (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case "SET_POPULAR_MOVIES":
            return {
                ...state,
                popular: {
                    ...payload,
                    display: filterByText(payload.results, state.searchText)
                }
            }
        case "SET_NOW_PLAYING_MOVIES":
            return {
                ...state,
                nowPlaying: {
                    ...payload,
                    display: filterByText(payload.results, state.searchText)
                }
            }
        case "SET_SEARCH_TEXT":
            return {
                ...state,
                searchText: payload,
                popular: {
                    ...state.popular,
                    display: filterByText(state.popular.results, payload)
                },
                nowPlaying: {
                    ...state.nowPlaying,
                    display: filterByText(state.nowPlaying.results, payload)
                }

            }
        default:
            return state;
    }
}