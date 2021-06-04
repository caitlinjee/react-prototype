import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';


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

function createData(name) {
  return { name };
}
const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function NewLineBox(props) {

  console.log(props);

  const classes = useStyles();

  return (

    <StyledTableRow key={props.newRow}>
      <StyledTableCell component="th" scope="row">
      <form onSubmit={props.onSubmit} >
        <TextField
          autoFocus
          id="name"
          label="Name"
          type="Name"
          value={props.newRow || ''}
          onChange = {props.onChange}
        />
      </form>
    </StyledTableCell>
  </StyledTableRow>
  );
}