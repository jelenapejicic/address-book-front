import React from 'react';
import './contact.style.scss';
import {DeleteButton} from '../delete-button/delete-button.component';

export const Contact = (props) => {

    const Modal = props.modal;    
    
    const image_url = props.contact.image_url !== '' ? props.contact.image_url : require('../../assets/images/imagenotavailable.png');
    

    const handleRemoveItem = (e) => {

        //console.log(props.contact.id);

        if(window.confirm('Delete the contact?'))
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id:props.contact.id })
            };
            
            fetch('http://localhost:8080/imenik/api/contact/delete.php', requestOptions).then(props.handleState);

        };
    };
   
    
    return (
        
        <div className="contact-container">
            
            <Modal className="edit-button" iconClass="fa fa-edit" contactDetails={props.contact}></Modal>
            
            <DeleteButton onClick={handleRemoveItem} ></DeleteButton>
            
            <img alt="customer" src={image_url} className="customer-image" />
            <p><span> {props.contact.name} </span>
            <span> {props.contact.last_name} </span></p>
            <p> <i className="fa fa-phone"></i> {props.contact.telephone}</p>
            <p> <i className="fa fa-envelope"></i> {props.contact.email}</p>
        </div>
    );
}
