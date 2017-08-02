import React from 'react';
import {shallow} from 'enzyme';

import Game from '../components/guess-game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game/>);
    });

});


