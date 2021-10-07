import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "./../actions";

const initialState = {
    teams: {
        name: '',
        conference: {
            name: '',
        },
        division: {
            name: '',
        },
        officialSiteUrl: '',
    },
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            return ({
                ...state,
                teams: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            });
        default: 
            return state;
    }
};

export default reducer;