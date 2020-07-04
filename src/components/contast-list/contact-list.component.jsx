import React from 'react';
import './contact-list.style.scss';
import { Contact } from '../contact/contact.component';

export const ContactList = (props) => (
  <div className="contact-list">
    {props.contacts.map((monster) => (
      <Contact key={monster.id} contact={monster} handleState={props.handleState} modal={props.modal}/>
    ))}
</div>
);
