import {User} from "../controller/user.controller";
import axios from "axios";
import $api, {API_URL} from "../api";
export interface UserRes{
  user: User
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}

class UserService {
  static async login(email: string, password: string) {
    const data:UserRes = (await $api.post<any>('/user/login',{email,password})).data
    return data
  }

  static async registration(email: string, password:string, name: string) {
    const data:UserRes = (await $api.post<any>('/user/registration', {email,password,name})).data
    return data
  }

  static async refresh() {
    const data:UserRes = (await axios.get<any>(`${API_URL}/user/refresh`, {
      withCredentials: true
    })).data
    return data
  }

}

export default UserService