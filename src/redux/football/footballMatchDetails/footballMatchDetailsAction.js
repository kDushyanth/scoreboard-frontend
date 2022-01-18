import axios from 'axios';
import {
    FETCH_MATCH_DETAILS_REQUEST,
    FETCH_MATCH_DETAILS_SUCCESS,
    FETCH_MATCH_DETAILS_FAILURE
} from './footballMatchDetailsType';

export const fetchMatchDetailsRequest = ()=> {
    return {
        type : FETCH_MATCH_DETAILS_REQUEST
    }
}
export const fetchMatchDetailsSuccess = (data)=>{
    return {
        type : FETCH_MATCH_DETAILS_SUCCESS,
        payload : data
    }
}
export const fetchMatchDetailsFailure = (error)=>{
    return {
        type : FETCH_MATCH_DETAILS_FAILURE,
        payload : error
    }
}

export const fetchMatchDetails = (url)=>{
    url = "http://localhost:3000/api/football-match-details/5bc52791-37b5-4769-a59f-cc53fa44153a"
    return async (dispatch)=> {
        console.log("football match details url",url)
        dispatch(fetchMatchDetailsRequest())
        try {
            let response = await axios.get(url)
            let data = await response.data
            console.log("football match details",data)
            dispatch(fetchMatchDetailsSuccess(data))
        } catch (error) {
            dispatch(fetchMatchDetailsFailure(error.message))
        }
    }
}