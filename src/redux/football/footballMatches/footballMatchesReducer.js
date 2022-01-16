import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE
} from './footballMatchesType'

const initState = {
    loading : true,
    matches : [],
    error : ''
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case FETCH_MATCHES_REQUEST : return {
            loading : true,
            matchDetails : [],
            error : ''
        }
        case FETCH_MATCHES_SUCCESS : return {
            loading : false,
            matches : action.payload,
            error : ''
        }
        case FETCH_MATCHES_FAILURE : return {
            loading : false,
            matches : [],
            error : action.payload
        }
        default : return state
    }
}
export default reducer