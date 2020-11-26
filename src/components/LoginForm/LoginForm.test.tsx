import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import  store  from '../../Redux/store';

configure({adapter: new Adapter()});
test('LoginForm should be render', () => {
  const component = shallow(
    
    <Provider store={store}>
  <LoginForm />
  </Provider>
  );

  expect(component).toBeTruthy();
});