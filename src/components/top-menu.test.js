import React from 'react';
import {shallow} from 'enzyme';
import TopMenu from '../components/top-menu';

describe('<TopMenu />', () => {
    it('Renders without crashing', () => {
        shallow(<TopMenu />);
    });
    
});


