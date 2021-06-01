import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MessageIcon from '@material-ui/icons/Message';
import CodeIcon from '@material-ui/icons/Code';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import NavBar from "../components/NavBar/NavBar";
import RequiredParams from "../components/IntentDetail/RequiredParams";
import TrainingPhrases from "../components/IntentDetail/TrainingPhrases";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "1em"
  },
  textField: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(1),
    width: '145ch',
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(7),
  },
}));

export default function IntentDetail() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div className={classes.root} style = {{margin:"2"}}>
        <IconButton aria-label="delete">
          <ArrowBackIcon />
        </IconButton>
        <form noValidate autoComplete="off">
          <TextField
          id="filled-basic"
          label="Type intent name here"
          style={{ margin: 5 }}
          className={classes.textField}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
      <Divider />
      <RequiredParams />
      <Divider />
      <TrainingPhrases />
    </div>

  )
}