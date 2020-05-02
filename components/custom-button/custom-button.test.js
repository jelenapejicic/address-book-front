import React from 'react';
import * as enzyme from 'enzyme';
import  CustomButton  from './custom-button.component';


it('it should render CustomButton component', () => {

    const wrapper = enzyme.shallow(<CustomButton />);
    expect(wrapper).toMatchSnapshot();

});
