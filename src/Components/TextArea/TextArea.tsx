import React from 'react';
import { TextAreaProp } from '../../interfaces/component-interface';

export default function TextArea({ value, name, placeholder, disabled, onChange, rows, cols, label}: TextAreaProp) {
  return (
    <div className='chbi-textarea-container'>
    <label className='chbi-textarea-label'>{label}</label>
    <textarea className='chbi-textarea'
      value={value}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      rows={rows}
      cols={cols}
    ></textarea>
  </div>
  )
}