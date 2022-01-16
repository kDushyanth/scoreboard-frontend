import store from "./redux/store";
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import FootballMatches from "./components/FootballMatches";
import FootballMatchDetails from './components/FootballMatchDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path = "/" element = {<FootballMatches/>} />
          <Route path = "/football-match-details/:id" element={<FootballMatchDetails/>}/>
        </Routes>
      </Router>        
    </Provider>
  );
}

export default App;
