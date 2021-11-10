import CardService from '../service/card.service'
import {store} from "../store/store";
import {addCard, changeCard, removeCard, setCardList} from "../store/reducers/card.reducer";


export interface CardI {
  id: number,
  admin_id:number,
  name: string
}

class CardController {

  static async getAll(user_id: number):Promise<any>{
    try {
      return CardService.getAll(user_id).then((list) => {
        store.dispatch(setCardList(list))
        return true
      })
    }catch (e) {
      throw e
    }
  }


  static add(user_id: number, name: string):void {
    try {
        CardService.add(user_id, name).then(card => {
        store.dispatch(addCard(card))
      })
    }catch (e) {
      throw e
    }
  }

  static async changeName(card_id:number, name:string): Promise<any>{
    try {
      return CardService.changeName(card_id, name).then(card => {
        store.dispatch(changeCard(card))
      })
    }catch (e) {

    }
  }

  static async delete(card_id:number): Promise<any>{
    try {
      console.log('Card ID - ', card_id)
      return CardService.delete(card_id).then(() => {
        return store.dispatch(removeCard(card_id))
      })
    }catch (e) {

    }
  }

}

export default CardController