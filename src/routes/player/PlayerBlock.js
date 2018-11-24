import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './PlayerPartialRecord.css';

const CustomTableCell = withStyles(theme => ({
  head: {
    fontSize:18,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '87%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function CustomizedTable(props) {
  const { classes } = props;

  return (
    <div id="recordmain">
    <Paper className={classes.root}>
    <div id="recordtitlediv"><h2 id="recordtitle">블록 순위</h2></div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <CustomTableCell numeric>순위</CustomTableCell>
          <CustomTableCell>선수명</CustomTableCell>
          <CustomTableCell>팀명</CustomTableCell>
          <CustomTableCell>포지션</CustomTableCell>
            <CustomTableCell numeric>경기수</CustomTableCell>
            <CustomTableCell numeric>블록합계</CustomTableCell>
            <CustomTableCell numeric>블록평균</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
              <CustomTableCell numeric>순위</CustomTableCell>
          <CustomTableCell>선수명</CustomTableCell>
          <CustomTableCell>팀명</CustomTableCell>
          <CustomTableCell>포지션</CustomTableCell>
            <CustomTableCell numeric>경기수</CustomTableCell>
            <CustomTableCell numeric>블록합계</CustomTableCell>
            <CustomTableCell numeric>블록평균</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);