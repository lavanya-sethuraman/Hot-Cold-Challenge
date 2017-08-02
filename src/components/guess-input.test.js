import React from 'react';
import {shallow} from 'enzyme';
import GuessInput from '../components/guess-input';

describe('<GuessInput />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessInput />);
    });
    
});
