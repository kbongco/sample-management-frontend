import { InputProp } from "../../interfaces/component-interface";
import './Input.css'

export default function Input({ type, label, value, name, placeholder, error, disabled, onChange, errorMessage }: InputProp) {
  return (
    <div className='chbi-input-container'>
      <label className='chbi-input-label'>{label}</label>
      <input className='chbi-input '
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      ></input>
      {error && <div className='chbi-input-error-container'>
        {errorMessage}
        </div>}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
}