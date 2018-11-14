import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Kbltopbody from './routes/Kbltopbody.js';
import Kblbody from './routes/Kblbody.js';
import ChatWidget from './routes/ChatWidget';

  const App = () => {
    return (
      <Router>
        <div>
          <Route exact  path="/" component={Home}/>
          <Route exact  path="/" component={ChatWidget}/>
          <Route path="/board" component={Kbltopbody}/>
          <Route path="/board" component={Kblbody}/>
        </div>
      </Router>
    );
  };

export default App;