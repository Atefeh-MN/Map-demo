import {FETCH_FILEDATA_FAILURE,FETCH_FILEDATA_REQUEST,FETCH_FILEDATA_SUCCESS  } from './fileActionTypes';

const initialState = {
    loading: false,
    error: '',
    fileData: []
};

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILEDATA_REQUEST:
            return { ...state, loading: true }
        case FETCH_FILEDATA_FAILURE:
            return { loading: false, error: action.payload, fileData: [] }
        case FETCH_FILEDATA_SUCCESS:
            return { loading: false, error: '', fileData: action.payload }
        default:
            return state;
    }
}
export default fileReducer;
