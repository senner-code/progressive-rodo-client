import $api from "../api";

class CardService {

  static async getAll<T>(user_id: number) {
    try {
      return (await $api.get<any>(`/auth/card/get_all/${user_id}`)).data
    }catch (e) {
      throw e
    }
  }

  static async add(user_id: number, name:string){
    try {
      return (await $api.post<any>(`/auth/card/add`, {user_id, name})).data
    }catch (e) {
      throw e
    }
  }

}

export default CardService