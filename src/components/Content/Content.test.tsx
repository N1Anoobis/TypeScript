import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Content from './Content';
import { Provider } from 'react-redux';
import  store  from '../../Redux/store';

configure({adapter: new Adapter()});
test('Content should be render', () => {
  const component = shallow(
    
    <Provider store={store}>
  <Content />
  </Provider>
  );

  expect(component).toBeTruthy();
});