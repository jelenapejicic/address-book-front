import React, { useState, useEffect } from 'react';
import './App.css';
import { ContactList } from './components/contast-list/contact-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import {CreateContact} from './components/create-contact/create-contact.component';
import Popup from "reactjs-popup";


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

  const fetchFunc = async () => {
      const response = await fetch(
        'http://localhost:8080/imenik/api/contact/read.php'
      );
      const resJson = await response.json();
      console.log(resJson.records);

      if(resJson.records !== undefined){
        const filtered = resJson.records.filter(contact =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setContacts(filtered);
      } 
      
    };
    fetchFunc();
  }, [searchTerm]);

  
  const handleState = () => {
   
    const fetchFunc = async () => {
      const response = await fetch(
        'http://localhost:8080/imenik/api/contact/read.php'
      );
      const resJson = await response.json();
      console.log(resJson.records);
      setContacts(resJson.records);
    };
    fetchFunc();
  }


  return (
    <div >
      <h1>Address Book</h1>
      <div className="contact-box">
      <SearchBox
        placeholder="Search names..."
        handleChange={e => setSearchTerm(e.target.value)}
      />
      <Modal className="add-button" iconClass="fa fa-plus"/>
      </div>
      <ContactList contacts={contacts} handleState={handleState} modal={Modal}></ContactList>
    
    </div>
  )
}

export default App;

