import {$api} from "../api";


export interface User{
  user: {
    email: string,
    id:number,
    name: string,
    isAuth?: boolean
  }
}

class UserService {
  static async login(email: string, password: string) {
    const data:User = JSON.parse(JSON.stringify((await $api.post('/user/login',{email,password})).data))
    return data
  }





}

export default UserService