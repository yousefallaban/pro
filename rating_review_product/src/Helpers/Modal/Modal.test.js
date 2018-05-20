import React from 'react'
import Modal from './Modal'

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('should render children when passed in', () => {
    const wrapper = shallow((
      <Modal>
        <div className= 'popup_content' />
      </Modal>
    ));
    expect(wrapper.contains(<div className='popup_content'/>)).toEqual(true);
  })
    
})
