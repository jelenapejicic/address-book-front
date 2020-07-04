import React, { useState, useEffect } from 'react';
import './App.css';
import { ContactList } from './components/contast-list/contact-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import { CreateContact } from './components/create-contact/create-contact.component';
import Popup from "reactjs-popup";
import { fetchFunc } from "./Api";

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const Modal = (props) => (
    <Popup className="modalll"
      trigger={<button className={props.className}> <span className={props.iconClass}></span> </button>}
      modal
      closeOnDocumentClick
    >
      <CreateContact handleState={handleState} contactDetails={props.contactDetails}></CreateContact>
    </Popup>
  );


  useEffect(() => {

    fetchFunc('read.php', null).then(data => {

      if (data !== undefined) {
        const filtered = data.filter(contact =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setContacts(filtered);
      }
    });

  }, [searchTerm]);


  const handleState = () => {

    fetchFunc('read.php', null).then(data => setContacts(data));

  }
  
  return (
    <div >
      <h1>Address Book</h1>
      <div className="contact-box">
        <SearchBox
          placeholder="Search names..."
          handleChange={e => setSearchTerm(e.target.value)}
        />
        <Modal className="add-button" iconClass="fa fa-plus" />
      </div>
      <ContactList contacts={contacts} handleState={handleState} modal={Modal}></ContactList>

    </div>
  )
}

export default App;

