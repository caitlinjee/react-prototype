import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import NavBar from "../components/NavBar/NavBar";
import LoginForm from "../components/LoginForm/LoginForm";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

class LoginOrRegister extends React.Component {

  render() {
    return (
      <div justify='center' alignItems='center'>
        <NavBar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid item xs={3}>
            <Box border={3} borderRadius={16} width={350} height = {100} padding={2} alignItems="center">
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '13vh'}}>
                <Button style = {{margin: "2em"}} color="primary" margin="1" variant="contained" size="large">Login</Button>
                <Button style = {{margin: "2em"}} color="primary" variant="contained" size="large">Register</Button>
              </div>
            </Box>
          </Grid>   

        </Grid> 
      </div>

    )}
}

export default LoginOrRegister;
