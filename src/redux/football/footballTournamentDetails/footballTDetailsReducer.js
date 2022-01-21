import {
    FOOTBALL_TOURNAMENT_DETAILS_SUCCESS,
    FOOTBALL_TOURNAMENT_DETAILS_FALIURE,
    FOOTBALL_TOURNAMENT_DETAILS_REQUEST
} from './footballTDetailsType'
const initState = {
    loading : true,
    tMatches : [],
    error: ''
}
const reducer = (state = initState,action)=>{
    switch(action.type){
        case FOOTBALL_TOURNAMENT_DETAILS_REQUEST : return {
            loading : true,
            tMatches : [],
            error : ''
        }
        case FOOTBALL_TOURNAMENT_DETAILS_SUCCESS : return {
            loading : false,
            tMatches : action.payload,
            error : ''
        }
        case FOOTBALL_TOURNAMENT_DETAILS_FALIURE : return {
            loading : false,
            tMatches : [],
            error : action.payload
        }
        default : return state
    }
}
export default reducer