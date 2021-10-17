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
    UserService.login(email, password)
      .then((data: UserRes) => {
        localStorage.setItem('token', data.tokens.accessToken)
        const user: User = data.user
        store.dispatch(setUser(user))
      })
  }

  static async registration(email: string, password: string, name: string) {
    UserService.registration(email, password, name)
      .then((data: UserRes) => {
        localStorage.setItem('token', data.tokens.accessToken)
        const user: User = data.user
        store.dispatch(setUser(user))
      })
  }

  static async checkAuth() {
    UserService.refresh().then(data => {
      localStorage.setItem('token', data.tokens.accessToken)
      const user:User = data.user
      store.dispatch(setUser(user))
    })

  }
}

export default UserController