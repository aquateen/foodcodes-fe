import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Header from './Header';
import HomePage from './HomePage';
import UnsubscribePage from './UnsubscribePage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route path="/unsubscribe" component={UnsubscribePage} />
      </div>
    </Router>
  );
}

export default App;
