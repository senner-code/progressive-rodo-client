import CardService from '../service/card.service'


export interface Card {
  id: number,
  admin_id:number,
  name: string
}

class CardController {

  static async getAll(user_id: number):Promise<Card[]>{
    try {
      return await CardService.getAll(user_id)
    }catch (e) {
      throw e
    }
  }


  static async add(user_id: number, name: string):Promise<Card> {
    try {
      return await CardService.add(user_id, name)
    }catch (e) {
      throw e
    }
  }


}

export default CardController