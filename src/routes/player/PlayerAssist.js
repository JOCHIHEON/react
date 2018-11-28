import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './Player.css';
const record = [{
  player_name: "조치헌",
  team_name : "한국아이티",
  player_ast : 123,
  player_position:"가드"
}];

class PlayerAssist extends React.Component {
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
    <div id="player">
    <BootstrapTable
    data={ record }
    pagination={ true }
    search={ true }
    options={ this.options }
    >
          <TableHeaderColumn dataSort >순위</TableHeaderColumn>
          <TableHeaderColumn  dataField='player_name' dataSort isKey={true}>선수명</TableHeaderColumn>
          <TableHeaderColumn  dataField='team_name' dataSort>팀명</TableHeaderColumn>
          <TableHeaderColumn  dataField='player_position' dataSort>포지션</TableHeaderColumn>
            <TableHeaderColumn  dataField='player_ast' dataSort>어시스트</TableHeaderColumn>
            </BootstrapTable>
    </div>
  );
}
}

export default PlayerAssist;
