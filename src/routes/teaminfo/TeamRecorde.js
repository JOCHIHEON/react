import React from'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const record = [{
  team_pts: 121,
  team_lostpts: 200,
  team_ast: 1201,
  team_reb: 1202,
  team_stl: 1203,
  team_blk: 1204,
  team_fg: 1205,
  team_ft: 1206,
  team_threept: 1207,
  team_threeptp: 1208,
  team_ft: 1209,
  team_ftp: 12000,
  team_to: 120001
}];

class TeamRecord extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
      this.options = {
          defaultSortName: 'team_pts',  // default sort column name
          defaultSortOrder: 'desc'  // default sort order
        };
    }
  
    render() {
      return (
        <div>
            <BootstrapTable
              ref='table'
              data={ record }
              pagination={ true }
              search={ true }
              options={ this.options }
              >
            <TableHeaderColumn dataField='team_pts'  dataSort isKey={true}>팀 득점</TableHeaderColumn>
            <TableHeaderColumn dataField='team_lostpts' dataSort>팀 실점</TableHeaderColumn>
            <TableHeaderColumn dataField='team_ast' dataSort>팀 어시스트</TableHeaderColumn>
            <TableHeaderColumn dataField='team_reb' dataSort>팀 리바운드</TableHeaderColumn>
            <TableHeaderColumn dataField='team_stl' dataSort>팀 스틸</TableHeaderColumn>
            <TableHeaderColumn dataField='team_blk' dataSort>팀 블록</TableHeaderColumn>
            <TableHeaderColumn dataField='team_fg' dataSort>팀 야투</TableHeaderColumn>
            <TableHeaderColumn dataField='team_ft' dataSort>팀 야투 성공률</TableHeaderColumn>
            <TableHeaderColumn dataField='team_threept' dataSort>팀 3점슛</TableHeaderColumn>
            <TableHeaderColumn dataField='team_threeptp' dataSort>팀 3점슛 성공률</TableHeaderColumn>
            <TableHeaderColumn dataField='team_ft' dataSort>팀 자유투</TableHeaderColumn>
            <TableHeaderColumn dataField='team_ftp' dataSort>팀 자유투 성공률</TableHeaderColumn>
            <TableHeaderColumn dataField='team_to' dataSort>팀 턴오버</TableHeaderColumn>
            </BootstrapTable>
            </div>
  );
 }
}

export default TeamRecord;