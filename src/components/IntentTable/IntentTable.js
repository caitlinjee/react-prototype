import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import CardActionArea from '@material-ui/core/CardActionArea';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(intent, editDate) {
  return { intent, editDate };
}

const rows = [
  createData("intent", "1/1/21"),
  createData("intent2", "2/1/21"),
  createData("intent3", "3/1/21"),
];

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 700,
  },
  plus : {
    vertical: 'top',
    horizontal: 'right',
  }
});

export default function IntentTable() {
  const classes = useStyles();

  return (

    <div>
    <Link to="/intentdetail">
      <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
              <AddIcon className={classes.plus} />
            </CardContent>
          </CardActionArea>
      </Card>
    </Link>

    <br></br>
    <br></br>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Intent </StyledTableCell>
            <StyledTableCell align="right">Edit Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.intent}>
              <StyledTableCell component="th" scope="row">
                {row.intent}
              </StyledTableCell>
              <StyledTableCell align="right">{row.editDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}