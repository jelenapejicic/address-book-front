import React from 'react';
import * as enzyme from 'enzyme';
import { Contact } from './contact.component';


it('it should render Contact component', () => {

    const contactData = {
        id: 1,
        image_url: 'https://i.pinimg.com/280x280_RS/25/20/ae/2520ae445b23f319fbbd5bb254f547fb.jpg',
        name: 'Jelena',
        last_name: 'Pejicic',
        telephone: '01122333',
        email: 'jelena.pejicic@gmail.com'
    }

    const props = {
        modal: 'Modal conponent?!!!',
        image_url: 'https://i.pinimg.com/280x280_RS/25/20/ae/2520ae445b23f319fbbd5bb254f547fb.jpg',
        contact: contactData,
    }

    const wrapper = enzyme.shallow(<Contact {...props} />);
    expect(wrapper).toMatchSnapshot();

});

