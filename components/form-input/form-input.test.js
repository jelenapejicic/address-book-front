import React from 'react';
import * as enzyme from 'enzyme';
import  FormInput  from './form-input.component';


it('it should render EditButton component', () => {

    const wrapper = enzyme.shallow(<FormInput />);
    expect(wrapper).toMatchSnapshot();

});

it('is should call function on input change', () => {

    const mockCallBack = jest.fn();

    const inputElement = enzyme.shallow((<FormInput onChange={mockCallBack}></FormInput>));
    inputElement.find('.form-input').simulate('change');
    expect(mockCallBack.mock.calls.length).toEqual(1);

});