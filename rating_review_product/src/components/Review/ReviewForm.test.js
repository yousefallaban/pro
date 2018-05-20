import React from 'react';
import ReviewForm from './ReviewForm';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewForm/>', () => { 
  it('handleSubmit when Submit button is clicked', () => { 
    const wrapper = shallow(<ReviewForm />)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').simulate('click'));
  })
})
