import React from "react";
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "./RowBox.css";

const boxStyle = { 
  alignItems: "centre",
  //marginLeft: '50%', 
  //marginTop: '100px', 
  width: 100,
  //padding: 40,
  fontSize: "20px",
  textAlign: "centre",
  borderRadius: 10,
  borderColor: "thistle",
  borderWidth: 1,
}


const useStyles = makeStyles((theme) => ({
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70
  },
  input: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  }
}));

class RowBox extends React.Component {

  render() {
    return (
      <div className = "useStyles" style = {boxStyle} >
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" borderRadius={16} style = {useStyles.inputContainer}>
            <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" multiline="true"/>
            <TextField id="standard-basic" label="Standard" multiline="true"/>
            </form>
          </Box>
          </Grid>
      </div>

    )}
}

export default RowBox;
