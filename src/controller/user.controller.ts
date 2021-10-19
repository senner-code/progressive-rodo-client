import UserService, {UserRes} from "../service/user.service";
import {setUser} from "../store/reducers/user.reducer";

import {store} from "../store/store";

export interface User {
  email: string,
  id: number,
  name: string,
  isAuth?: boolean
}

class UserController {
  static async login(email: string, password: string) {
    try {
      return UserService.login(email, password)
        .then((data: UserRes) => {
          localStorage.setItem('token', data.tokens.accessToken)
          const user: User = data.user
          store.dispatch(setUser(user))
          return true
        })
    }catch (e) {
      return e
    }
  }

  static async registration(email: string, password: string, name: string) {
    try {
      UserService.registration(email, password, name)
        .then((data: UserRes) => {
          localStorage.setItem('token', data.tokens.accessToken)
          const user: User = data.user
          store.dispatch(setUser(user))
        })
    } catch (e) {
      return e
    }
  }

  static async checkAuth() {
    return UserService.refresh().then(data => {
      if (data) {
        localStorage.setItem('token', data.tokens.accessToken)
        const user: User = data.user
        store.dispatch(setUser(user))
        return true
      }
      return false
    })

  }

  static logout() {
    localStorage.removeItem('token')
    store.dispatch(setUser({
      email: "",
      id: 0,
      name: "",
      isAuth: false
    }))
  }
}

export default UserController