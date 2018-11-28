import React from'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const record = [{
  player_name: "조치헌",
  player_no: 1,
  player_min: 12,
  player_pts: 121,
  player_ast: 1201,
  player_reb: 1202,
  player_stl: 1203,
  player_blk: 1204,
  player_fg: 1205,
  player_ft: 1206,
  player_threept: 1207,
  player_threeptp: 1208,
  player_ft: 1209,
  player_ftp: 12000,
  player_to: 120001
},{
  player_name: "강동원",
  player_no: 2,
  player_min: 12,
  player_pts: 121,
  player_ast: 1201,
  player_reb: 1202,
  player_stl: 1203,
  player_blk: 1204,
  player_fg: 1205,
  player_ft: 1206,
  player_threept: 1207,
  player_threeptp: 1208,
  player_ft: 1209,
  player_ftp: 12000,
  player_to: 120001
}
];

class TeamPlayerRecord extends React.Component {
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
            <BootstrapTable
              ref='table'
              data={ record }
              pagination={ true }
              search={ true }
              options={ this.options }
              >
            <TableHeaderColumn dataField='player_name'isKey={true} dataSort>선수명</TableHeaderColumn>
            <TableHeaderColumn dataField='player_no' dataSort>등번호</TableHeaderColumn>
            <TableHeaderColumn dataField='player_min' dataSort>출장시간</TableHeaderColumn>
            <TableHeaderColumn dataField='player_pts' dataSort>득점</TableHeaderColumn>
            <TableHeaderColumn dataField='player_ast' dataSort>어시스트</TableHeaderColumn>
            <TableHeaderColumn dataField='player_reb' dataSort>리바운드</TableHeaderColumn>
            <TableHeaderColumn dataField='player_stl' dataSort>스틸</TableHeaderColumn>
            <TableHeaderColumn dataField='player_blk' dataSort>블록</TableHeaderColumn>
            <TableHeaderColumn dataField='player_fg' dataSort>야투</TableHeaderColumn>
            <TableHeaderColumn dataField='player_ft' dataSort>야투 성공률</TableHeaderColumn>
            <TableHeaderColumn dataField='player_threept' dataSort>3점슛</TableHeaderColumn>
            <TableHeaderColumn dataField='player_threeptp' dataSort>3점슛 성공률</TableHeaderColumn>
            <TableHeaderColumn dataField='player_ft' dataSort>자유투</TableHeaderColumn>
            <TableHeaderColumn dataField='player_ftp' dataSort>자유투 성공률</TableHeaderColumn>
            <TableHeaderColumn dataField='player_to' dataSort>턴오버</TableHeaderColumn>
            </BootstrapTable>
            </div>
  );
 }
}

export default TeamPlayerRecord;