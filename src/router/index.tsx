import React, {ReactChildren} from "react";
import App from "../components/App";
import Login from "../components/Authorization/Login/Login";
import Registration from "../components/Authorization/Registration/Registration";

interface Routes {
  path: string,
  exact: boolean,
  component: React.FunctionComponent
  children?: ReactChildren
}

export const publicRoutes:Routes[] = [
  {exact: true, path:'/login', component:Login},
  {exact: true, path:'/registration', component:Registration}
]

export const privateRoutes:Routes[] = [
  {exact: true, path:'/dashboard', component:App}

]