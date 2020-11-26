import React from 'react';
import './LoginForm.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { State, loginFailed, loginSuccess } from '../../Reducer/Reducer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

const LoginForm = (): JSX.Element => {

  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    dispatch(loginSuccess());
    const path = `/content`;
    history.push(path);
  }

  const failLogin = () => {
    dispatch(loginFailed('Please enter correct email and password containing minimum of 8 characters, 1 number and 1 upper letter'));
  }

  type LoginFormData = {
    email: string;
    password: string;
  }

  const validate = (values: LoginFormData): Partial<LoginFormData> => {
    const errors: Partial<LoginFormData> = {};

    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
      errors.email = 'Incorrect email';
    }

    if (values.password.length < 8) {
      errors.password = 'Enter at least 8 characters';
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
      errors.password = 'Enter at least one upper letter';
    } else if (!/(?=.*[0-9])/.test(values.password)) {
      errors.password = 'Enter at least one number';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: () => {
      //Sensitive data should be stored in env variables for example on heroku
      if (formik.values.email === 'email@email.com' && formik.values.password === 'Password1') {
        login();
      } else {
        failLogin();
      }
    },
    validate
  });

  const text = useSelector((state: State) => state.helperText);

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className="form" noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              value={formik.values.email}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
              onChange={formik.handleChange} />
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
              value={formik.values.password}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
              onChange={formik.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign In
          </Button>
          </form>
          {text}
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;