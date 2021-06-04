import React from 'react';
import {Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import "../NavBar/NavBar.css";


class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <FormControl noValidate autoComplete="off" justify='center' alignItems='center'>
          <div>
          <TextField
            id="outlined-username-input"
            label="Username"
            type="username"
            autoComplete="current-username"
            variant="outlined"
            padding="50"
            textAlign="center"
          />
          </div>
          <br></br>
          <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          </div>
          <br></br>
          <br></br>
        </FormControl>
        <br></br>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Link to="/intents">
            <Button color="primary" variant="contained">{this.props.loginOrReg}</Button>
          </Link>
        </div>
      </div>

    )}
}

export default LoginForm;