import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '80%',
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
    <Paper className={classes.root}>
    <h3>팀 수비력(상대팀으로부터 허용한 기록)</h3>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <CustomTableCell>팀명</CustomTableCell>
            <CustomTableCell numeric>득점</CustomTableCell>
            <CustomTableCell numeric>리바운드</CustomTableCell>
            <CustomTableCell numeric>어시스트</CustomTableCell>
            <CustomTableCell numeric>스틸</CustomTableCell>
            <CustomTableCell numeric>블록</CustomTableCell>
            <CustomTableCell numeric>3점슛성공</CustomTableCell>
            <CustomTableCell numeric>3점슛 성공률</CustomTableCell>
            <CustomTableCell numeric>2점슛 성공률</CustomTableCell>
            <CustomTableCell numeric>턴오버</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
