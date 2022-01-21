import { combineReducers } from "redux";
import footballMatchesReducer from './football/footballMatches/footballMatchesReducer'
import footballMatchDetailsReducer from './football/footballMatchDetails/footballMatchDetailsReducer'
import footballTournamentsReducer from './football/footballTournaments/footballTournamentsReducer'
import footballTournamentDetailsReducer from "./football/footballTournamentDetails/footballTDetailsReducer";

const rootReducer = combineReducers({
    footballMatches : footballMatchesReducer,
    footballMatchDetails : footballMatchDetailsReducer,
    footballTournaments : footballTournamentsReducer,
    footballTDetails : footballTournamentDetailsReducer
})
export default rootReducer