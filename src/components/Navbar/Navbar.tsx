import React, {FC, useState} from 'react';
import UserController, {User} from "../../controller/user.controller";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import CardList from "../CardList/CardList";

const Navbar: FC = () => {

  const [loading, setLoading] = useState<boolean>(true)

  const user: User = useSelector((state: RootState) => state.user)

  return loading ?
    (
      <div className={'navbar'}>
        <div className="navbar__container">
          <div className="navbar__burger">-</div>
          <div className="navbar__user">{user.name} {user.email}</div>
          <div className="navbar__features">

          </div>
          <div className="navbar__list">
            <CardList/>
          </div>
        </div>
        <div className="navbar__logout">
        <span onClick={() => {
          setLoading(false)
          UserController.logout()
          window.location.href='/login'
        }}>Logout</span>
        </div>
      </div>
    )
    : <span>Гружусь...</span>
};

export default Navbar;