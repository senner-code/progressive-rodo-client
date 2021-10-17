import React, {FC} from 'react';
import {Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router";

const isAuth = true




const Router:FC = () => {

  const massive = isAuth ? publicRoutes : privateRoutes

  return (
    <React.Fragment>
      {massive.map(el => <Route exact={el.exact} path={el.path} component={el.component} children={el.children}/>)}
    </React.Fragment>
  );
};

export default Router;