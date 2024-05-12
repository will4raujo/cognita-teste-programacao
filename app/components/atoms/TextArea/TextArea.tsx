import './TextArea.css';
import React from 'react';

type TextAreaProps = {
  children?: React.ReactNode;
  label: string;
  name?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ children, label, name, ...props }: TextAreaProps) => {
  return (
    <div className='text-area-wrapper'>
      <span className='text-area-label'>{label}</span>
      <textarea className='text-area' name={name} {...props}>{children}</textarea>
    </div>
  )
};

export default TextArea;