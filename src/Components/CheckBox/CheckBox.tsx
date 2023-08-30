import { useState } from "react";
import { CheckBoxProps } from "../../interfaces/component-interface";
import './CheckBox.css'

export default function CheckBox({ label, value, name, checked, onChange }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className='chbi-checkbox-container'>
      <label className='chbi-checkbox-label'>{label}</label>
      <input type='checkbox' value={value} name={name} checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
    </div>
  )
}