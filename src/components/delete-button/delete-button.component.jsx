import React from 'react';
import './delete-button.style.scss';

export const DeleteButton = (props) => {
    return (
        <span className="delete-icon" onClick={props.onClick}>
            <i className="fa fa-times"></i>
        </span>
    )
};
