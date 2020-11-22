import React, { useReducer } from 'react';
import './LoginForm.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { initialState } from '../../Reducer/Reducer';
import { reducer } from '../../Reducer/Reducer';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const history = useHistory();

  const login = () => {
    const path = `/content`;
    history.push(path);
  }


  const handleLogin = (e: any) => {
    e.preventDefault();
    if (state.username === 'email@email.com' && state.password === 'pass') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
      login();
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Please enter correct email and password containing minimum of 8 digits, 1 number and 1 upper letter'
      });
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  return (
    <>
      <div className="App">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleUsernameChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={(e) => handleLogin(e)}
              >
                Sign In
          </Button>
            </form>
            {state.helperText}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LoginForm;