import React from 'react';

import './custom-button.style.scss';

const CustomButton = (props) => (
  <button
    className="custom-button"
    type="{props.type}"
  >
      {props.label}
 </button>
);

export default CustomButton;
