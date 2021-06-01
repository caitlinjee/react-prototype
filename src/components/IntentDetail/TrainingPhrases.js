import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageIcon from '@material-ui/icons/Message';

import TrainingPhraseOverlay from "./TrainingPhraseOverlay"
import TrainingPhraseForm from "./TrainingPhraseForm"

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
          <MessageIcon style={{ margin: 7 }} /><Typography className={classes.heading} style={{ margin: 7 }}>Training Phrases</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TrainingPhraseForm />
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>

  )
}