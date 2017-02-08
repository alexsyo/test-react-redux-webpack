import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Stuff from '../../../../../src/components/Routes/Stuff/components/Stuff.js';

it('display the correct elements', () => {

    expect(shallow(<Stuff />).contains(<p>Godd stuff...</p>)).toBe(true);
    expect(shallow(<Stuff />).find('button').length).toBe(1);

});