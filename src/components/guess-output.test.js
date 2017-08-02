import React from 'react';
import {shallow} from 'enzyme';
import GuessOutput from '../components/guess-output';

describe('<GuessOutput />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessOutput />);
    });
    
});

