import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    height:200
  },
});
export default function DenseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>食べ物 ({props.weight}g あたり)</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th">カロリー</TableCell>
              <TableCell align="right">{props.kal} kcal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">脂質</TableCell>
              <TableCell align="right">{props.fat} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">タンパク質</TableCell>
              <TableCell align="right">{props.protein} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">炭水化物</TableCell>
              <TableCell align="right">{props.carbo} g</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
