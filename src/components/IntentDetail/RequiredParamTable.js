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
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import NewLineBox from './NewLineBox';




/*https://stackoverflow.com/questions/37771316/react-triggering-click-event-on-table-row
https://stackoverflow.com/questions/36757889/add-row-on-button-press-react */


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

const rows = [
  createData('$param1'),
  createData('$param1'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

let showComponent = false;

export default function RequiredParamTable() {

  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState('');

   const handleSubmit = (event) => {
    event.preventDefault();
    if (!newRow.name) {
      return;
    }
    setRows((prev) =>
      [newRow,
      ...prev]
    );
    createData(newRow.name);
    setNewRow(() => '');
  }


  const handleChange = ({target}) => {
    const { name, value } = target;
    setNewRow((prev) => ({
      ...prev,
      id: Date.now(),
      name: value
    }));
  }


  function showNewRow() {
    showComponent = true;
    setNewRow(() => '');
    return (
      <NewLineBox newRow = {newRow.name} onSubmit = {handleSubmit} onChange = {handleChange}/>
    )
  }

  function createRows() {
    return (
      <StyledTableRow key={newRow.id}>
        <StyledTableCell component="th" scope="row">
        <form onSubmit={handleSubmit} >
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="Name"
            value={newRow.name || ''}
            onChange = {handleChange}
          />
        </form>
      </StyledTableCell>
    </StyledTableRow>
    )
  }


  return (
    <TableContainer component={Paper} style = {{margin: "1em"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <NewLineBox newRow = {newRow.name} onSubmit = {handleSubmit} onChange = {handleChange}/>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
            </StyledTableRow>
          ))}
            <StyledTableRow key="i">
              <StyledTableCell component="th" scope="row">
              <IconButton
              onClick={showNewRow}
              >
                <div style = {{
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}>
                  <AddIcon />
                </div>
              </IconButton>
              </StyledTableCell>
            </StyledTableRow>  
        </TableBody>
      </Table>
    </TableContainer>
  );
}