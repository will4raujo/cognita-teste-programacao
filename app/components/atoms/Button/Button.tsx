import React from 'react'
import './Button.css'

interface ButtonProps {
  style?: 'default' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'button'
} 

const Button = ({ style, children, onClick, type }: ButtonProps) => {
  
  return (
    <button className={style ?? 'default'} onClick={onClick} data-type={type} >
      {children}
    </button>
  )
}

export default Button