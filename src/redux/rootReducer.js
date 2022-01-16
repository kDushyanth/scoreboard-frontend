import { combineReducers } from "redux";
import footballMatchesReducer from './football/footballMatches/footballMatchesReducer'
import footballMatchDetailsReducer from './football/footballMatchDetails/footballMatchDetailsReducer'
const rootReducer = combineReducers({
    footballMatches : footballMatchesReducer,
    footballMatchDetails : footballMatchDetailsReducer
})
export default rootReducer