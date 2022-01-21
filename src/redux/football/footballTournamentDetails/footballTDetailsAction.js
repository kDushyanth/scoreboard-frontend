import axios from 'axios'
import {
    FOOTBALL_TOURNAMENT_DETAILS_FALIURE,
    FOOTBALL_TOURNAMENT_DETAILS_REQUEST,
    FOOTBALL_TOURNAMENT_DETAILS_SUCCESS
} from './footballTDetailsType'

const footballTDetailsRequest = ()=>{
    return {
        type : FOOTBALL_TOURNAMENT_DETAILS_REQUEST
    }
}
const footballTDetailsSuccess = (data)=>{
    return {
        type : FOOTBALL_TOURNAMENT_DETAILS_SUCCESS,
        payload : data
    }
}
const footballTDetailsFailure = (error)=>{
    return {
        type : FOOTBALL_TOURNAMENT_DETAILS_FALIURE,
        payload : error
    }
}

export const fetchFootballTDetails = (id)=>{
    return async (dispatch)=>{
        console.log("f t det",id)
        dispatch(footballTDetailsRequest())
        try{
            let response = await axios.get(`/api/football-tournament-details/${id}`)
            let data = await response.data
            
            dispatch(footballTDetailsSuccess(data))
        }catch(error){
            dispatch(footballTDetailsFailure(error.message))
        }
    }
}