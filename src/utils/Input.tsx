import React, {ChangeEvent, FC} from 'react';

interface InputProps {
  placeholder: string | undefined,
  type: string,
  value: any,
  setValue: (value: string) => void
  id?: string
  maxLength?: number
  class?: string
}

const Input:FC<InputProps> = (props:InputProps) => {
  return (
    <input className={props.class} id={props.id} type={props.type} placeholder={props.placeholder} value={props.value}
           onChange={(event: ChangeEvent<HTMLInputElement>) => event.currentTarget.value.length < 250 ? props.setValue(event.currentTarget.value) : null}/>
  );
};

export default Input;