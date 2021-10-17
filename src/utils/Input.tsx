import React, {ChangeEvent, FC} from 'react';

interface InputProps {
  placeholder: string | undefined,
  type: string,
  value: any,
  setValue: (value: string) => void
}

const Input:FC<InputProps> = (props:InputProps) => {
  return (
    <input type={props.type} placeholder={props.placeholder} value={props.value}
           onChange={(event: ChangeEvent<HTMLInputElement>) => props.setValue(event.currentTarget.value)}/>
  );
};

export default Input;