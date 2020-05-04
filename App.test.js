import React from 'react';
import * as enzyme from 'enzyme';
import { fetchFunc } from './App';
import App from './App';
//import "babel-polyfill";
// import { fetchData } from './api';
// import { act } from 'react-dom/test-utils';


it('it should render App component', () => {

    const wrapper = enzyme.shallow(<App/>);
    expect(wrapper).toMatchSnapshot();

});

it('it calls api to get people' , async () => {

    // let data = await fetchFunc();
    // expect(data).toBe('peanut butter');

    expect.assertions(1);
    return expect(fetchFunc()).rejects.toEqual({
    error: 'User with 3 not found.',
  });

} );

