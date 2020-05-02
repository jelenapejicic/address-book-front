import React from 'react';
import * as enzyme from 'enzyme';
import { SearchBox } from './search-box.component';


it('it should render SearchBox component', () => {

    const wrapper = enzyme.shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();

});

it('is should call function on search input change', () => {


    const mockHandleChange = jest.fn();

    const inputElement = enzyme.shallow((<SearchBox
        placeholder="Search names..."
        handleChange={mockHandleChange}>
    </SearchBox>));

    //console.log(inputElement.debug());

    inputElement.find('.search').simulate('change');
    expect(mockHandleChange.mock.calls.length).toEqual(1);

});