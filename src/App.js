import store from "./redux/store";
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import FootballMatches from "./components/FootballMatches";
import FootballMatchDetails from './components/FootballMatchDetails';
import { Box } from "@mui/material";
import Footer from './components/Footer'
import FootballTournaments from "./components/FootballTournaments";
import FootballTournamentDetails from "./components/FootballTournamentDetails";
import NavBar from "./components/NavBar";
import { centerContent } from './styles';

function App() {
  return (
    <>
    <NavBar game={"football"}/>
    <Box sx={centerContent}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path = "/football-tournaments/" element = {<FootballTournaments/>} />
          <Route path = "/football-matches/" element = {<FootballMatches/>} />
          <Route path = "/football-tournament-details/:id" element = {<FootballTournamentDetails/>}/>
          <Route path = "/football-match-details/:id" element={<FootballMatchDetails/>}/>
        </Routes>
      </Router>        
    </Provider>
    </Box>
    <Footer/>
    </>
  );
}

export default App;
