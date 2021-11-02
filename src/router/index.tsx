import React, {ReactChildren} from "react";
import Login from "../components/Authorization/Login/Login";
import Registration from "../components/Authorization/Registration/Registration";
import CardItem from "../components/CardList/CardItem/CardItem";
import EmptyList from "../components/EmptyList/EmptyList";

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
  {exact: true, path: '/dashboard', component: EmptyList},
  {exact: true, path:'/dashboard/card/:card_id', component: CardItem}
]