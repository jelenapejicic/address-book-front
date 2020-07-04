import React from 'react';
import * as enzyme from 'enzyme';
import { EditButton } from './edit-button.component';


it('it should render EditButton component', () => {

    const wrapper = enzyme.shallow(<EditButton />);
    expect(wrapper).toMatchSnapshot();

});

it('is should call edit popup when icon is clicked', () => {

    const mockCallBack = jest.fn();

    const button = enzyme.shallow((<EditButton onClick={mockCallBack}></EditButton>));
    button.find('.edit-icon').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);

});