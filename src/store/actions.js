import transport from "../transport";
import {LIMIT} from "../constants";

const CHANGE_PAGE = 'CHANGE_PAGE';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_FETCH_ERROR = 'TOGGLE_FETCH_ERROR';
const SET_CHARACTERS = 'SET_CHARACTERS';

export const changePage = (page) => ({type: CHANGE_PAGE, payload: page});
export const toggleLoading = (loading) => ({type: TOGGLE_LOADING, payload: loading});
export const toggleFetchError = (error) => ({type: TOGGLE_FETCH_ERROR, payload: error});
export const setCharacters = (characters) => ({type: SET_CHARACTERS, payload: characters});

export const loadingPage = (page) => {
    return async (dispatch) => {
        dispatch(toggleLoading(true));
        dispatch(changePage(page));
        const data = await transport.getCharacters(LIMIT, page * LIMIT);
        if (typeof data === 'number') {
            dispatch(toggleFetchError(true));
        } else {
            dispatch(setCharacters(data));
        }
        dispatch(toggleLoading(false));
    }
}

export const getCharacter = (id) => {
    return async (dispatch) => {
        dispatch(toggleLoading(true));
        const data = await transport.getCharacterInfo(id);
        if (typeof data === 'number') {
            dispatch(toggleFetchError(true));
        } else {
            dispatch(setCharacters(data.data.results));
        }
        dispatch(toggleLoading(false));
    }
}