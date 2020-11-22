import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Content from './components/Content/Content';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/content' component={Content} />
    </Switch>
  </BrowserRouter>
);

export default App;
