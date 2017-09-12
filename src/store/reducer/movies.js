import filterByText from 'helpers/filterByText';

const INITIAL_STATE = {
    popular: {
        searchText: "",
        results: [],
        display: []
    },
}

export default function (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case "SET_POPULAR_MOVIES":
            return {
                ...state,
                popular: {
                    ...state.popular,
                    ...payload,
                    display: filterByText(payload.results, state.popular.searchText)
                }
            }
        case "SET_POPULAR_MOVIES_SEARCH_TEXT":
            return {
                ...state,
                popular: {
                    ...state.popular,
                    searchText: payload,
                    display: filterByText(state.popular.results, payload)
                }
            }
        default:
            return state;
    }
}