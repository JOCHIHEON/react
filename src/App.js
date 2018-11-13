import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Kbltopbody from './routes/Kbltopbody.js';

  const App = () => {
    return (
      <Router>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/board" component={Kbltopbody}/>
        </div>
      </Router>
    );
  };

export default App;