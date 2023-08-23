import React from 'react';
import './Button.css';
import { Button } from '../../interfaces/component-interface';

function Button({ onClick, type, children, className, size, disabled }: Button) {
  return (
    <button 
      className={`button ${className} ${size}`}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
      </button>
  )
}


export default Button;