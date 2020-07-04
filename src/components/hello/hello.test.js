import React from 'react';
import * as enzyme from 'enzyme';
import { HelloWorld } from './hello.component';

it('hello world test', () => {

    const wrapper = enzyme.shallow(<HelloWorld />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.hellow')).toBeDefined();
    expect(wrapper.text().includes('Hello, World!')).toBe(true);
});