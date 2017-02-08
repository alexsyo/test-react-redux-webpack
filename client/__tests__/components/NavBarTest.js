import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBar from '../../src/components/NavBar.js';

it('display the correct elements', () => {

    expect(shallow(<NavBar />).find('Link').length).toBe(4);

});