import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import NavBar from "../components/NavBar/NavBar";
import LoginForm from "../components/LoginForm/LoginForm";

class Register extends React.Component {

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
            <Box border={3} borderRadius={16} width={350} height = {400} padding={2}>
              <h1 style={{padding: 10, textAlign: "center"}}>Register</h1>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                <LoginForm loginOrReg = "Sign Up"/>
              </div>
            </Box>
          </Grid>   

        </Grid> 
      </div>

    )}
}

export default Register;
