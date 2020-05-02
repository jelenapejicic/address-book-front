import React from 'react';
import * as enzyme from 'enzyme';
import { SearchBox } from './search-box.component';


it('it should render SearchBox component', () => {

    const wrapper = enzyme.shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();

});

// it('is should call function on search input change', () => {

//     const mockCallBack = jest.fn();

//     const inputElement = enzyme.shallow((<SearchBox onChange={mockCallBack} />));
//     inputElement.find('.search').simulate('change');
//     expect(mockCallBack.mock.calls.length).toEqual(1);

// });