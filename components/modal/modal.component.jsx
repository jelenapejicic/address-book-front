import React from 'react';
import Popup from "reactjs-popup";
import { CreateContact } from '../create-contact/create-contact.component';

export const Modal = (props) => (
    <Popup className="modalll"
      trigger={<button className={props.className}> <span className={props.iconClass}></span> </button>}
      modal
      closeOnDocumentClick
    >
      <CreateContact handleState={props.handleState}> </CreateContact>
    </Popup>
);

  
