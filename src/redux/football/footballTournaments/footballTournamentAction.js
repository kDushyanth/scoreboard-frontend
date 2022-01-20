import axios from 'axios'
import {
    FETCH_FOOTBALL_TOURNAMENTS_REQUEST,
    FETCH_FOOTBALL_TOURNAMENTS_SUCCESS,
    FETCH_FOOTBALL_TOURNAMENTS_FAILURE
} from './footballTournamentType'

const footballTournamentsRequest = ()=>{
    return {
        type : FETCH_FOOTBALL_TOURNAMENTS_REQUEST
    }
}
const footballTournamentsSuccess = (data)=>{
    return {
        type : FETCH_FOOTBALL_TOURNAMENTS_SUCCESS,
        payload : data
    }
}
const footballTournamentsFailure = (error)=>{
    return {
        type : FETCH_FOOTBALL_TOURNAMENTS_FAILURE,
        payload : error
    }
}

export const fetchFootballTournaments = ()=>{
    return async (dispatch)=>{
        dispatch(footballTournamentsRequest())
        try{
            let response = await axios.get('/api/football-tournaments/');
            let data = await response.data
            console.log("football tournament action",data)
            dispatch(footballTournamentsSuccess(data))
        }catch(error){
            console.log("football tournament action",error)
            dispatch(footballTournamentsFailure(error.message))
        }
    }
}