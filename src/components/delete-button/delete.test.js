import React from 'react';
import * as enzyme from 'enzyme';
import { DeleteButton } from './delete-button.component';


it('it should render DeleteButton component', () => {

    const wrapper = enzyme.shallow(<DeleteButton />);
    expect(wrapper).toMatchSnapshot();

});

it('is should call delete popup when icon is clicked', () => {

    const mockCallBack = jest.fn();

    const button = enzyme.shallow((<DeleteButton onClick={mockCallBack}></DeleteButton>));
    button.find('.delete-icon').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);

});