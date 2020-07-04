import React from 'react';
import './edit-button.style.scss';

export const EditButton = (props) => {
    return (
        <span className="edit-icon" onClick={props.onClick}>
            <i className="fa fa-edit"></i>
        </span>
    )
};
