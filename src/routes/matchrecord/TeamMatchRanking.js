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

class TeamMatchRanking extends React.Component {
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
           <h4>팀순위</h4>
            <BootstrapTable
              ref='table'
              data={ record }
              pagination={ true }
              search={ true }
              options={ this.options }
              >
            <TableHeaderColumn isKey={true} dataSort>순위</TableHeaderColumn>
            <TableHeaderColumn dataField='team_name' dataSort>팀명</TableHeaderColumn>
            <TableHeaderColumn dataField='team_win' dataSort>승</TableHeaderColumn>
            <TableHeaderColumn dataField='team_lose' dataSort>패</TableHeaderColumn>
            <TableHeaderColumn dataField='team_winningrate' dataSort>승률</TableHeaderColumn>
            <TableHeaderColumn dataField='team_gap' dataSort>승차</TableHeaderColumn>
            <TableHeaderColumn dataField='team_winning' dataSort>연승</TableHeaderColumn>
            </BootstrapTable>
            </div>
  );
 }
}

export default TeamMatchRanking;