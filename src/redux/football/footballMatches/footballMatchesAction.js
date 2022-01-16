import axios from 'axios'
import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE
} from './footballMatchesType'

const fetchMatchesRequest = () => {
    return {
        type : FETCH_MATCHES_REQUEST
    }
}
const fetchMatchesSuccess = (matches) => {
    return {
        type : FETCH_MATCHES_SUCCESS,
        payload : matches
    }
}
const fetchMatchesFailure = (error) => {
    return {
        type : FETCH_MATCHES_FAILURE,
        payload : error
    }
}

export const fetchMatches = () => {
    return async (dispatch) => {
        dispatch(fetchMatchesRequest())
        try{
            let response = await axios.get('/api/football-matches/');
            let matches = await response.data
            dispatch(fetchMatchesSuccess(matches))
        }catch(error){
            dispatch(fetchMatchesFailure(error.message))
        }
    }
}
