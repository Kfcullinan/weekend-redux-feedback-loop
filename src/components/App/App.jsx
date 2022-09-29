import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [feedbackList, setFeedBackList] = useState([]);

  useEffect(() => {
    console.log('in useEffect');
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      setFeedBackList(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Get to gettin in your GET!')
    });
    }
    
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

          <Route exact path="/comments">
          <Comments />
          </Route>

          <Route exact path="/review">
          <Review />
          </Route>

          

      </div>
      </Router>
    </div>
  );
}

export default App;
