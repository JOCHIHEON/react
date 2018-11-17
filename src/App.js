import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import ChatWidget from './routes/ChatWidget';
import MainFreeBoard from './routes/board/MainFreeBoard.js';
import FreeBoard from './routes/board/FreeBoard.js';
import FanBoard from './routes/board/FanBoard.js';
import MainFanBoard from './routes/board/MainFanBoard.js';
import TeamList from './routes/teaminfo/TeamList';
import TeamSchedule from './routes/teaminfo/TeamSchedule';
import TeamMember from './routes/teaminfo/TeamMember';
import TeamRecode from './routes/teaminfo/TeamRecorde';
import TeamMenu from './routes/teaminfo/TeamMenu';
import Login from './routes/loginsign/Login';
import signup from './routes/loginsign/Signup';
import TeamInfo from './routes/teaminfo/TeamInfo';
import TemaMatchMenu from './routes/matchrecord/TeamMatchMenu';
import TeamMatchRecord from './routes/matchrecord/TeamMatchRecordMain';
import TeamMatchRecordView from './routes/matchrecord/TeamMatchRecordView';
import TeamMatchRanking from './routes/matchrecord/TeamMatchRanking';



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
          <Route path="/teamlist/" component={TeamList}/>
          <Route path="/teamlist/teammenu" component={TeamMenu}/>
          <Route path="/teamlist/teammenu/teaminfo" component={TeamInfo}/>
          <Route path="/teamlist/teammenu/teammember" component={TeamMember}/>
          <Route path="/teamlist/teammenu/teamrecorde" component={TeamRecode}/>
          <Route path="/teamlist/teammenu/teamschedule" component={TeamSchedule}/>
          <Route path="/login/" component={Login}/>
          <Route path="/signup/" component={signup}/>
          <Route path="/board/free" component={MainFreeBoard}/>
          <Route path="/board/free" component={FreeBoard}/>
          <Route path="/board/fan" component={MainFanBoard}/>
          <Route path="/board/fan" component={FanBoard}/>
          <Route path="/teammatchmenu" component={TemaMatchMenu}/>
          <Route path="/teammatchmenu/teammatchrecord" component={TeamMatchRecord}/>
          <Route path="/teammatchmenu/teammatchrecordview" component={TeamMatchRecordView}/>
          <Route path="/teammatchmenu/teammatchranking" component={TeamMatchRanking}/>
        </div>
      </Router>
    );
  };

export default App;