import React, { useState } from 'react';
import './create-contact.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


export const CreateContact = (props) => {

  //console.log(props.contactDetails);

  let button_label = '';
  let tytle = '';
  
  // let old_name = '';
  // let old_last_name = '';
  // let old_email = '';
  // let old_telephone = '';
  // let old_image_url = '';

  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image_url, setImageUrl] = useState("");

  if (props.contactDetails === undefined) {
    button_label = "Create Contact";
    tytle = "New Contact";

  } else {
    button_label = "Edit Contact";
    tytle = "Edit Data";
    
    let old_name = props.contactDetails.name;
    let old_last_name = props.contactDetails.last_name;
    let old_email = props.contactDetails.email;
    let old_telephone = props.contactDetails.telephone;
    let old_image_url = props.contactDetails.image_url; 

    // setName(old_name);
    // setLastName(old_last_name);
    // setEmail(old_email);
    // setTelephone(old_telephone);
    // setImageUrl(old_image_url);
  
  }

  const id = props.contactDetails === undefined ? "" : props.contactDetails.id;

  
  const handleSubmit = async event => {
    event.preventDefault();
    console.log('submit form');

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ id: id, name: name, last_name: last_name, telephone: telephone, email: email, image_url: image_url })
    };

    if (id === '') {
      fetch('http://localhost:8080/imenik/api/contact/create.php', requestOptions)
        .then(props.handleState);
    } else {
      fetch('http://localhost:8080/imenik/api/contact/update.php', requestOptions)
        .then(props.handleState);
    }

  };


  return (
    <div className='create-contact'>
      <h3>{tytle}</h3>

      <form onSubmit={handleSubmit} id="create-contact-form">

        <FormInput
          name='id'
          type='hidden'
          value={id}
          onChange={e => setName(e.target.value)}
          required
        />

        <FormInput
          name='name'
          type='text'
          label='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <FormInput
          name='last_name'
          type='text'
          label='Last name'
          value={last_name}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <FormInput
          name='telephone'
          type='text'
          label='Telephone'
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
          required
        />
        <FormInput
          name='email'
          type='email'
          label='E-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <FormInput
          name='image_url'
          type='text'
          label='Image url'
          value={image_url}
          onChange={e => setImageUrl(e.target.value)}
        />

        <CustomButton type='submit' label={button_label} />
      </form>
    </div>
  );
}


