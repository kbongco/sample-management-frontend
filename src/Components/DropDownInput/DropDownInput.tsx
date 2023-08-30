import React, { useState, MouseEvent, ChangeEvent } from 'react';
import { Option, SelectProps} from "../../interfaces/component-interface";
import './DropDownInput.css';


export default function DropDown({ label, options, value, onChange }: SelectProps) {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return ( 
    <div className="chbi-select-container">
    <label className="chbi-select-label">{label}</label>
    <select className="chbi-select" value={value} onChange={handleSelectChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  )
}