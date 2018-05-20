import React from 'react'
import Stars from './stars'

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Stars />', () => {
  it('should render children when passed in', () => {
    const wrapper = shallow((
      <Stars>
        <div />
      </Stars>
    ));
    expect(wrapper.contains(<div />)).toEqual(true);
  })
})
