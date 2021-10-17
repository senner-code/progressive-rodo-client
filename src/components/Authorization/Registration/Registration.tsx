import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import './Registration.scss'
import Input from "../../../utils/Input";
import UserController from "../../../controller/user.controller";

const Registration: FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')


  return (
    <div className={'registration'}>
      <div className="registration__container">
        <div className="registration__header">
          Hello Bro, Registration
        </div>
        <div className="registration__inputs">
          <Input placeholder={'Email'} type={'text'} value={email} setValue={setEmail}/>
          <Input placeholder={'Password'} type={'password'} value={password} setValue={setPassword}/>
          <Input placeholder={'Name'} type={'text'} value={name} setValue={setName}/>
        </div>
        <button className="registration__submit" onClick={async () => {
          await UserController.registration(email, password, name)
        }}>Sign UP
        </button>
        <div className="registration__reroute">
          <span>You`re have account ? <Link to={'/login'}>Sign In</Link></span>
        </div>
      </div>
    </div>
  );
};
export default Registration;