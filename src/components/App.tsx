import React, {createContext, FC, useEffect, useState} from 'react';

import Router from "./Router/Router";
import UserController from "../controller/user.controller";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Navbar from "./Navbar/Navbar";
import './App.scss'


export interface HiddenI {
  hiddenNavbar: boolean,
  setHiddenNavbar: (x:boolean) => void,
  hiddenMenu: boolean,
  setHiddenMenu: (x:boolean) => void
}


export const Hidden = createContext<HiddenI>({
  hiddenNavbar: true,
  setHiddenNavbar: () => {},
  hiddenMenu: true,
  setHiddenMenu: () => {}
})

const App: FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth)
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(window.outerWidth < 765)
  const [hiddenNavbar, setHiddenNavbar] = useState<boolean>(window.outerWidth < 765)
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
      <Hidden.Provider value={{hiddenMenu, setHiddenMenu, setHiddenNavbar,hiddenNavbar}}>
        {loading ?
          <React.Fragment>
            {isAuth ? <Navbar/> : null}
            <Router/>
          </React.Fragment> : 'Добавить крутилку'}
      </Hidden.Provider>
    </div>
  );
};

export default App;