import $api from "../api";
import {CardI} from "../controller/card.controller";

class CardService {

  static async getAll(user_id: number):Promise<CardI[]> {
    try {
      return (await $api.get<any>(`/auth/card/get_all/${user_id}`)).data
    }catch (e) {
      throw e
    }
  }

  static async add(user_id: number, name:string):Promise<CardI>{
    try {
      return (await $api.post<any>(`/auth/card/add`, {user_id, name})).data
    }catch (e) {
      throw e
    }
  }

  static async changeName(card_id: number, name: string):Promise<CardI> {
    return (await $api.post<any>(`/auth/card/rename`, {card_id,name})).data
  }

  static async delete(card_id: number) {
    return (await $api.get<any>(`/auth/card/remove/${card_id}`)).data
  }
}

export default CardService