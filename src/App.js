import store from "./redux/store";
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import FootballMatches from "./components/FootballMatches";
import FootballMatchDetails from './components/FootballMatchDetails';
import Demo from "./components/Demo";
import Footer from './components/Footer'
import FootballTournaments from "./components/FootballTournaments";
function App() {
  return (
    <>
    
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path = '/football-tournaments/' element = {<FootballTournaments/>} />
          <Route path = "/" element = {<FootballMatches/>} />
          <Route path = "/football-match-details/:id" element={<FootballMatchDetails/>}/>
        </Routes>
      </Router>        
    </Provider>
    <Footer/>
    </>
  );
}

export default App;
