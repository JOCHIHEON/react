import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import ChatWidget from './routes/ChatWidget';
import MainFreeBoard from './routes/board/MainFreeBoard.js';
import FreeBoard from './routes/board/FreeBoard.js';
import FanBoard from './routes/board/FanBoard.js';
import MainFanBoard from './routes/board/MainFanBoard.js';

  const App = () => {
    return (
      <Router>
        <div>
          <Route exact  path="/" component={Home}/>
          <Route exact  path="/" component={ChatWidget}/>
          <Route path="/board/" component={MainFreeBoard}/>
          <Route path="/board/freeboard" component={FreeBoard}/>
          <Route path="/fanboard/" component={MainFanBoard}/>
          <Route path="/fanboard/fanboard" component={FanBoard}/>
        </div>
      </Router>
    );
  };

export default App;