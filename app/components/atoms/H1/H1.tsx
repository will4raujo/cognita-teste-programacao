import './H1.css';
import React from 'react';

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h1 className='title'>{children}</h1>;
};

export default Title;