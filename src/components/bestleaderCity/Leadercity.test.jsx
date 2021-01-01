import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Leadercity from './Leadercity';

configure({ adapter: new Adapter() });

describe('<Leadercity />', () => {
    const wrapper = shallow(<Leadercity />);
    it('should get props', () => {
        wrapper.setProps({ children: <p>Leadercity</p> });
        expect(wrapper.contains(<p>Leadercity</p>)).toEqual(true);
    });
});