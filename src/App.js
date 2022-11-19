import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import Trending from './components/Trending';
import UpComing from './components/UpComing';
import WebSeries from './components/WebSeries';
import MovieInformation from './components/MovieInformation';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/trending" component={Trending} />
        <Route path="/upcoming" component={UpComing} />
        <Route path="/webseries" component={WebSeries} /> 
        <Route path="/movie-detail" component={MovieInformation} />
      </Switch>

    </Router>
  );
}

export default App;
