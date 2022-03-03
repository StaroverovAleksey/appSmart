const defaultState = {
    page: 1,
    loading: false,
    fetchError: false,
    characters: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return { ...state, page: parseInt(action.payload)};
        case 'TOGGLE_LOADING':
            return { ...state, loading: action.payload};
        case 'TOGGLE_FETCH_ERROR':
            return { ...state, fetchError: action.payload};
        case 'SET_CHARACTERS':
            return { ...state, characters: action.payload};
        default: return state;
    }
}
