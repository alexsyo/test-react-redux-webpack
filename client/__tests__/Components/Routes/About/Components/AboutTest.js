import React from 'react';
import { shallow, mount, render } from 'enzyme';
import About from '../../../../../src/components/Routes/About/components/About.js';

it('display the correct message', () => {

    expect(shallow(<About />).contains(<p>It's me, Alex!</p>)).toBe(true);

});