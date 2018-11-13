import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';

  const App = () => {
    return (
      <Router>
        <div>
          <Route path="/" component={Home}/>
        </div>
      </Router>
    );
  };

export default App;