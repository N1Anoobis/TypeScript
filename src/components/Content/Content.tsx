import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { initialState } from '../../Reducer/Reducer';
import { reducer } from '../../Reducer/Reducer';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Content = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  console.log(state.isLogged)
  const logout = () => {

    const path = `/`;
    history.push(path);
  }

  return (
    <>
      {!state.isLogged ? <div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={()=>logout()}
        >
          Log out
          </Button>
      </div> : <Redirect to='/' exact path='/' />}
    </>
  );
}

export default Content;