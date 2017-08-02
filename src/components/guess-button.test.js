import React from 'react';
import {shallow} from 'enzyme';
import GuessButton from '../components/guess-button';

describe('<GuessButton />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessButton />);
    });
    
});
