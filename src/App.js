import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import ChatWidget from './routes/ChatWidget';
import MainFreeBoard from './routes/board/MainFreeBoard.js';
import FreeBoard from './routes/board/FreeBoard.js';
import FanBoard from './routes/board/FanBoard.js';
import MainFanBoard from './routes/board/MainFanBoard.js';
import MainTeamInfo from './routes/teaminfo/MainTeamInfo';
import TeamSchedule from './routes/teaminfo/TeamSchedule';
import TeamMember from './routes/teaminfo/TeamMember';
import TeamRecode from './routes/teaminfo/TeamRecode';
import TeamInfo from './routes/teaminfo/TeamInfo';
import Login from './routes/loginsign/Login';
import signup from './routes/loginsign/Signup';


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
          <Route path="/teaminfo/" component={MainTeamInfo}/>
          <Route path="/teaminfo/team" component={TeamInfo}/>
          <Route path="/teaminfo/team/teammember" component={TeamMember}/>
          <Route path="/teaminfo/team/teamrecode" component={TeamRecode}/>
          <Route path="/teaminfo/team/teamschedule" component={TeamSchedule}/>
          <Route path="/login/" component={Login}/>
          <Route path="/signup/" component={signup}/>
          <Route path="/board/free" component={MainFreeBoard}/>
          <Route path="/board/free" component={FreeBoard}/>
          <Route path="/board/fan" component={MainFanBoard}/>
          <Route path="/board/fan" component={FanBoard}/>
        </div>
      </Router>
    );
  };

export default App;