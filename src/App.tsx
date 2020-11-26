import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Content from './components/Content/Content';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from './Redux/Reducer';

const App = () => {
  const logged = useSelector((state: State) => state.isLogged);
  return (
    <BrowserRouter>
      { logged ? <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/content' component={Content} />
      </Switch> :
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/content' component={LoginForm} />
        </Switch>}
    </BrowserRouter>
  );
}

export default App;
