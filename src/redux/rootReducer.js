import { combineReducers } from "redux";
import footballMatchesReducer from './football/footballMatches/footballMatchesReducer'
import footballMatchDetailsReducer from './football/footballMatchDetails/footballMatchDetailsReducer'
import footballTournamentsReducer from './football/footballTournaments/footballTournamentsReducer'

const rootReducer = combineReducers({
    footballMatches : footballMatchesReducer,
    footballMatchDetails : footballMatchDetailsReducer,
    footballTournaments : footballTournamentsReducer
})
export default rootReducer