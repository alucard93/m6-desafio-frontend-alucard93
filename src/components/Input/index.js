import React from 'react';
import { InputContainer } from './style';

const Input = ({ label, name, register, errosMessage, type }) => (
  <InputContainer>
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name.toLowerCase()} type={type} {...register(name)} />
    </div>
    <p className="error__message">{errosMessage}</p>
  </InputContainer>
);

export default Input;
