import React, { useReducer } from 'react';
import './LoginForm.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { initialState } from './Reducer/Reducer';
import { reducer } from './Reducer/Reducer';

interface Props {
    onSubmit?: () => void;
}

const LoginForm: React.FC<Props> = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
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
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Min 8 digits 1 number 1 upper letter"
                            type="password"
                            id="password"
                            autoComplete="current-password"
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
                </div>
            </Container>
        </div>
    );
}

export default LoginForm;