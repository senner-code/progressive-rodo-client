import React, {ReactChildren} from "react";
import Login from "../components/Authorization/Login/Login";
import Registration from "../components/Authorization/Registration/Registration";
import Navbar from "../components/Navbar/Navbar";

export interface Routes {
  path: string,
  exact: boolean,
  component: React.FunctionComponent
  children?: ReactChildren
}

export const publicRoutes:Routes[] = [
  {exact: true, path:'/login', component: Login},
  {exact: true, path:'/registration', component: Registration}
]

export const privateRoutes:Routes[] = [
  {exact: true, path:'/', component: Navbar}
]