import React from 'react';
import * as enzyme from 'enzyme';
import { ContactList } from './contact-list.component';
import { Contact } from '../contact/contact.component';

describe('ContactList component', () => {
    
    let wrapper;
    const mockList = [
        {
            "id": "1",
            "name": "Jelena",
            "last_name": "Pejicic",
            "email": "jelenapejicic@gmail.com",
            "image_url": "https:\/\/i.pinimg.com\/280x280_RS\/25\/20\/ae\/2520ae445b23f319fbbd5bb254f547fb.jpg",
            "telephone": "011222444"
        },
        {
            "id": "2",
            "name": "Bojana",
            "last_name": "Pejicic",
            "email": "pejicicbojana@gmail.com",
            "image_url": "https:\/\/image.shutterstock.com\/image-photo\/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg",
            "telephone": "011222333"
        },
    ];

    beforeEach(() => {
       
        const mockProps = {
            contacts: mockList,
            handleState: jest.fn()
        };
    
        wrapper = enzyme.shallow(<ContactList {...mockProps} />);
      
    });

    it('it should render List of Contacts', () => {

        expect(wrapper).toMatchSnapshot();

    });

    it('should render an equal number of Contact components as the ContactList prop', () => {
        
        console.log(wrapper.debug());
        const children = wrapper.find(Contact);
        expect (children).toHaveLength(2);

    });
});
