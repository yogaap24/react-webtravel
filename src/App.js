import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/landingPage';
import itemDetails from 'pages/itemDetails';

import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={itemDetails}></Route>
      </Router>
    </div>
  );
}

export default App;
