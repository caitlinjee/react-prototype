import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';

import RequiredParamTable from "./RequiredParamTable"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function RequiredParams() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CodeIcon style={{ margin: 7 }} /><Typography className={classes.heading} style={{ margin: 7 }}>Required Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RequiredParamTable />
        </AccordionDetails>
      </Accordion>
      </div>
    </div>

  )
}