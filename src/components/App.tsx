import React, {FC, useEffect, useState} from 'react';

import Router from "./Router/Router";
import UserController from "../controller/user.controller";

const App: FC = () => {

  const [loading, setLoading] = useState<boolean>(false)



  useEffect(() => {
    if (localStorage.getItem('token')) {
      UserController.checkAuth().then(() => {
        setLoading(true)
      })
    }else{
      setLoading(true)
    }
  }, [])

  return (
    <div className={`app`}>
      {loading ? <Router/> : 'Добавить крутилку'}
    </div>
  );
};

export default App;