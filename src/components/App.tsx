import React, {FC, useEffect} from 'react';

import Router from "./Router/Router";
import UserController from "../controller/user.controller";
const App:FC = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      UserController.checkAuth()
    }
  }, [])

  return (
      <div className={`app`}>
        <Router/>
      </div>
  );
};

export default App;