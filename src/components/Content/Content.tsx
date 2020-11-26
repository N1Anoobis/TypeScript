import React, { useEffect } from 'react';
import './Content.css';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State, loginFailed, setIsLogged, setStatus } from '../../Redux/Reducer';
import { callMockedEndpoint } from '../../Redux/Reducer';

const Content = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const logged = useSelector((state: State) => state.isLogged);
  const status = useSelector((state: State) => state.status);
  const msg = useSelector((state: State) => state.msg);
  const msgClean = msg.replace(/["{}:]/g, '');

  useEffect(() => {
    if (!logged) {
      const path = `/`;
      history.push(path);
    } else {
      dispatch(callMockedEndpoint());
    }
  }, [history, logged, dispatch])

  const logout = () => {
    dispatch(loginFailed(''))
    dispatch(setIsLogged(false));
    dispatch(setStatus(404));
    const path = `/`;
    history.push(path);
  }

  return (
    <>
      {logged ? <div className="content">
        <div className="status">server respond status: {status}</div>
        <div className="msg">{msgClean}</div>
        <Button
          className="btn"
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