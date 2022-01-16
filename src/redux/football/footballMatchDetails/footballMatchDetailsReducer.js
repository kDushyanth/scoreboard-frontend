import {
    FETCH_MATCH_DETAILS_REQUEST,
    FETCH_MATCH_DETAILS_SUCCESS,
    FETCH_MATCH_DETAILS_FAILURE
} from './footballMatchDetailsType';

const initState = {
    loading : true,
    matchDetails : {},
    error : ''
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case FETCH_MATCH_DETAILS_REQUEST : return {
            loading : true,
            matchDetails : {},
            error : ''
        };
        case FETCH_MATCH_DETAILS_SUCCESS : return {
            loading : false,
            matchDetails : action.payload,
            error : ''
        };
        case FETCH_MATCH_DETAILS_FAILURE : return {
            loading : false,
            matchDetails : {},
            error : action.payload
        };
        default : return state
    }
}
export default reducer