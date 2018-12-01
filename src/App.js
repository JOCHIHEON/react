import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import ChatWidget from './routes/ChatWidget';
import TeamList from './routes/teaminfo/TeamList';
import TeamSchedule from './routes/teaminfo/TeamSchedule';
import TeamMember from './routes/teaminfo/TeamMember';
import TeamRecode from './routes/teaminfo/TeamRecorde';
import TeamMenu from './routes/teaminfo/TeamMenu';
import TeamPlayerRecord from './routes/teaminfo/TeamPlayerRecord';
import Login from './routes/loginsign/Login';
import signup from './routes/loginsign/Signup';
import TeamInfo from './routes/teaminfo/TeamInfo';
import TemaMatchMenu from './routes/matchrecord/TeamMatchMenu';
import BoardWrite from './routes/board/BoardWrite';
import BoardView from './routes/board/BoardView';
import PlayerRanking from './routes/player/PlayerRanking';
import PlayerScore from './routes/player/PlayerScore';
import PlayerRebound from './routes/player/PlayerRebound';
import PlayerAssist from './routes/player/PlayerAssist';
import PlayerSteal from './routes/player/PlayerSteal';
import PlayerBlock from './routes/player/PlayerBlock';
import PlayerThreePointShot from './routes/player/PlayerThreePointShot';
import PlayerFreeThrow from './routes/player/PlayerFreeThrow';
import PlayerInfo from './routes/player/PlayerInfo';
import Sort from './routes/Sort';
import TeamChart from './routes/matchrecord/TeamChart'
import TeamVSTeam from './routes/matchrecord/TeamVSTeam';

  const App = () => {
    return (
      <Router>
        <div>
          <Route exact  path="/" component={Home}/>
          <Route exact  path="/" component={ChatWidget}/>
          <Route path="/teamlist/" component={TeamList}/>
          <Route path="/teamlist/teammenu" component={TeamMenu}/>
          <Route path="/teamlist/teammenu/teaminfo" component={TeamInfo}/>
          <Route path="/teamlist/teammenu/teammember" component={TeamMember}/>
          <Route path="/teamlist/teammenu/teamrecorde" component={TeamRecode}/>
          <Route path="/teamlist/teammenu/teamschedule" component={TeamSchedule}/>
          <Route path="/login/" component={Login}/>
          <Route path="/signup/" component={signup}/>
          <Route path="/boardwrite" component={BoardWrite}/>
          <Route path="/teammatchmenu" component={TemaMatchMenu}/>
          <Route path="/board/boardview" component={BoardView}/>
          <Route path="/playerranking" component={PlayerRanking}/>
          <Route path="/Playerscore" component={PlayerScore}/>
          <Route path="/playerrebound" component={PlayerRebound}/>
          <Route path="/playerassist" component={PlayerAssist}/>
          <Route path="/playersteal" component={PlayerSteal}/>
          <Route path="/playerblock" component={PlayerBlock}/>
          <Route path="/playerthreepointshot" component={PlayerThreePointShot}/>
          <Route path="/playerfreethrow" component={PlayerFreeThrow}/>
          <Route path="/playerinfo" component={PlayerInfo}/>
          <Route path="/Sort" component={Sort}/>
          <Route path="/teamplayerrecord" component={TeamPlayerRecord}/>
          <Route path="/teamchart" component={TeamChart}/>
          <Route path="/teamvsteam" component={TeamVSTeam}/>
        </div>
      </Router>
    );
  };

export default App;