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
    try {
      const data:UserRes = (await $api.post<any>('/user/login',{email,password})).data
      return data
    }catch (e) {
      throw e
    }
  }

  static async registration(email: string, password:string, name: string) {
    try {
      const data:UserRes = (await $api.post<any>('/user/registration', {email,password,name})).data
      return data
    }catch (e) {
      throw e
    }
  }

  static async refresh() {
    try {
      const data:UserRes = (await axios.get<any>(`${API_URL}/user/refresh`, {
        withCredentials: true
      })).data
      return data
    }catch (e) {
      return false
    }
  }

}

export default UserService