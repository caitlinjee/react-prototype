import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageIcon from '@material-ui/icons/Message';
import TextField from '@material-ui/core/TextField';

import TrainingPhraseOverlay from "./TrainingPhraseOverlay"


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

const useStyles = makeStyles((theme) =>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 1480,
    },
  },
  table: {
    minWidth: 500,
  },
}));

export default function TrainingPhraseForm() {

  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Enter training phrase here" variant="outlined" />
      </form>
      <br></br>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading} style={{ margin: 7 }}>new example training phrase</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
            <TrainingPhraseOverlay />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}