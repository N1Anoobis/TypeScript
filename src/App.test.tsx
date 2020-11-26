import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './Redux/store';

configure({adapter: new Adapter()});
test('App should be render', () => {
  const component = shallow(
    
    <Provider store={store}>
  <App />
  </Provider>
  );

  expect(component).toBeTruthy();
});