import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'
import Input from "../../../utils/Input";
import UserController from "../../../controller/user.controller";

const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className={'login'}>
      <div className="login__container">
        <div className="login__header">
          Hello Bro, Login
        </div>
        <div className="login__inputs">
          <Input placeholder={'Email'} type={'text'} value={email} setValue={setEmail}/>
          <Input placeholder={'Password'} type={'text'} value={password} setValue={setPassword}/>
        </div>
        <button className="login__submit" onClick={ async () => {
          await UserController.login(email,password)
        }}>Log in</button>
        <div className="login__reroute">
          <span>You`re new? <Link to={'/registration'}>Sign up</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;