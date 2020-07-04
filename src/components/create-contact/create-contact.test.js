import React from 'react';
import * as enzyme from 'enzyme';
import { CreateContact } from './create-contact.component';

it('it should render DeleteButton component', () => {

    const mockContact = {
        "id": "1",
        "name": "Jelena",
        "last_name": "Pejicic",
        "email": "jelenapejicic@gmail.com",
        "image_url": "https:\/\/i.pinimg.com\/280x280_RS\/25\/20\/ae\/2520ae445b23f319fbbd5bb254f547fb.jpg",
        "telephone": "011222444"
    };

    const mockProps = {
        handleSubmit: jest.fn(),
        contactDetails : mockContact
    }; 

    // const wrapper = enzyme.shallow(<CreateContact {... mockProps}/>);
    // expect(wrapper).toMatchSnapshot();

});

