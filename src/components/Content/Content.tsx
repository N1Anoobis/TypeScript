import React from 'react';
import { Redirect } from 'react-router-dom';
// import { State } from '../../Reducer/Reducer';
// import { reducer } from '../../Reducer/Reducer';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
// import {  useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { State, loginFailed, setIsLogged } from '../../Reducer/Reducer';

const Content = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const logged = useSelector((state: State) => state.isLogged);

  const logout = () => {
    dispatch(loginFailed(''))
    dispatch(setIsLogged(false));
    const path = `/`;
    history.push(path);
  }

  return (
    <>
      {logged ? <div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => logout()}
        >
          Log out
          </Button>
      </div> : <Redirect to='/' exact path='/' />}
    </>
  );
}

export default Content;