import React, {FC} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, Routes} from "../../router";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const Router:FC = () => {
  const isAuth = useSelector((state:RootState )=> state.user.isAuth)
  return isAuth?
    <Switch>
      {privateRoutes.map((route:Routes,index) => {
        return <Route key={index} path={route.path} component={route.component} exact={route.exact}/>
      })}
      <Redirect to={'/'}/>
    </Switch>
    :
    <Switch>
      { publicRoutes.map((route:Routes, index) => {
        return <Route key={index} path={route.path} component={route.component} exact={route.exact}/>
      })}
      <Redirect to={'/login'}/>
    </Switch>
};

export default Router;