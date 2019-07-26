import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home'

describe('basic render Check', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home/>)
  });
  
  test('it renders a home', () => {
    expect(wrapper.find('.wrapper-home').length).toBe(1); // This passes which indicates the wrapper is able to render
  });
});