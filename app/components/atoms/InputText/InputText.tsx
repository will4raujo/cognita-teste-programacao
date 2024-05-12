import './InputText.css'
import React from 'react'

type InputTextProps = {
  label: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const InputText = ({ label, name, ...props }: InputTextProps) => {
  return (
    <div className='input-text-wrapper'>
      <label className='input-text-label' htmlFor={name}>{label}</label>
      <input type='text' className='input-text input-shadow' {...props} id={name} name={name} />
    </div>
  )
}

export default InputText