import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    {label ? (
      <label
        className="label"
      >
        {label}
      </label>
    ) : null}
    <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
);

export default FormInput;
