import {
    FETCH_FOOTBALL_TOURNAMENTS_FAILURE,
    FETCH_FOOTBALL_TOURNAMENTS_REQUEST,
    FETCH_FOOTBALL_TOURNAMENTS_SUCCESS
} from './footballTournamentType'
const initState = {
    loading : false,
    tournaments : [],
    error : ''
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case FETCH_FOOTBALL_TOURNAMENTS_REQUEST : return {
            loading : true,
            tournaments : [],
            error : ''
        }
        case FETCH_FOOTBALL_TOURNAMENTS_SUCCESS : return {
            loading : false,
            tournaments : action.payload,
            error : ''
        }
        case FETCH_FOOTBALL_TOURNAMENTS_FAILURE : return {
            loading :  false,
            tournaments : [],
            error : action.payload
        }
        default : return state
    }
}
export default reducer