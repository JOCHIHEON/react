import React from'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
const record = [{
  team_name: "조치헌",
  team_win : 1,
  team_lose : 2,
  team_winningrate : 67,
  team_gap : 13,
  team_winning :3
  
 
}];

class TeamMatchPartRanking extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
      this.options = {
          defaultSortName: 'player_name',  // default sort column name
          defaultSortOrder: 'desc'  // default sort order
        };
    }
  
    render() {
      return (
        <div>
          <h4>부분별 팀순위</h4>
            <BootstrapTable
              ref='table'
              data={ record }
              pagination={ true }
              search={ true }
              options={ this.options }
              >
            <TableHeaderColumn isKey={true} dataSort>순위</TableHeaderColumn>
            <TableHeaderColumn dataField='team_name' dataSort>팀명</TableHeaderColumn>
            <TableHeaderColumn dataField='team_game' dataSort>경기수</TableHeaderColumn>
            <TableHeaderColumn dataField='teame_pts' dataSort>득점</TableHeaderColumn>
            <TableHeaderColumn dataField='team_reb' dataSort>리바운드</TableHeaderColumn>
            <TableHeaderColumn dataField='team_ast' dataSort>어시스트</TableHeaderColumn>
            <TableHeaderColumn dataField='team_stl' dataSort>스틸</TableHeaderColumn>
            <TableHeaderColumn dataField='team_blk' dataSort>블록</TableHeaderColumn>
            <TableHeaderColumn dataField='team_fg' dataSort>야투</TableHeaderColumn>
            <TableHeaderColumn dataField='team_threept' dataSort>3점슛</TableHeaderColumn>
            <TableHeaderColumn dataField='team_ft' dataSort>자유투</TableHeaderColumn>
            <TableHeaderColumn dataField='team_to' dataSort>턴오버</TableHeaderColumn>
            </BootstrapTable>
            </div>
  );
 }
}

export default TeamMatchPartRanking;