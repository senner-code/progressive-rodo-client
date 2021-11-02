import React, {ChangeEvent, FC} from 'react';

interface InputProps {
  placeholder: string | undefined,
  type: string,
  value: any,
  setValue: (value: string) => void
  id?: string
}

const Input:FC<InputProps> = (props:InputProps) => {
  return (
    <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value}
           onChange={(event: ChangeEvent<HTMLInputElement>) => props.setValue(event.currentTarget.value)}/>
  );
};

export default Input;