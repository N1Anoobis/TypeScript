import React, { useState } from 'react';
import './LoginForm.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { State, loginFailed, loginSuccess } from '../../Reducer/Reducer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    mail: '',
    password: '',
  });

  const login = () => {
    dispatch(loginSuccess());
    const path = `/content`;
    history.push(path);
  }

  const failLogin = () => {
    dispatch(loginFailed('Please enter correct email and password containing minimum of 8 digits, 1 number and 1 upper letter'));
  }

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (formData.mail === 'email@email.com' && formData.password === 'pass') {
      login();
    } else {
      failLogin();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const text = useSelector((state: State) => state.helperText);

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
                name="mail"
                autoComplete="email"
                autoFocus
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
            {text}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LoginForm;