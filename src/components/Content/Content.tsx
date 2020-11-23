import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State, loginFailed, setIsLogged } from '../../Reducer/Reducer';

const Content = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const logged = useSelector((state: State) => state.isLogged);

  useEffect(() => {
    if (!logged) {
      const path = `/`;
      history.push(path);
    }
  }, [history, logged])

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
      </div> : <Redirect push to="/" />}
    </>
  );
}

export default Content;