import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

function randomId(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getTeams = () => {
    return dispatch => {
        dispatch(fetchStart());

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/')
        .then(res => {
            const teams = res.data.teams[randomId(0,32)]
            dispatch(fetchSuccess(teams));
        })
        .catch(err => {
            dispatch(fetchFail('Was not able to load team!'));
        })
    }
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (teams) => {
    return ({ type: FETCH_SUCCESS, payload: teams });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}