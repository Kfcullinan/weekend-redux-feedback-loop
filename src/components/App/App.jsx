import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';

function App() {

  return (
    <div className='App'>

      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <br />
      <div>

        <Route exact path="/">
          <Feeling />
        </Route>

        <Route exact path="/understanding">
          <Understanding />
          </Route>

          <Route exact path="/support">
          <Support />
          </Route>


        


      </div>
      </Router>
    </div>
  );
}

export default App;
