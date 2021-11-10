import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardI} from "../../controller/card.controller";


const initialState: CardI[] = []

export const cardSlice = createSlice({
  name: 'Card',
  initialState,
  reducers: {
    setCardList: (state,cardList:PayloadAction<CardI[]>) => {
      state.splice(0,state.length)
      cardList.payload.forEach(card => state.push(card))
    },
    addCard: (state, action:PayloadAction<CardI>) => {
      state.push(action.payload)
    },

    changeCard: (state, action:PayloadAction<CardI>) => {
      state.forEach((card,index) => {
        if(card.id === action.payload.id){
          state[index] = action.payload
        }
      })
    },

    removeCard: (state, action:PayloadAction<number>) => {
      state.forEach((card,index) => {
        if(card.id === action.payload){
          state.splice(index, 1)
        }
      })
      console.log(state)
    },
  }
})

export const {setCardList,addCard,changeCard,removeCard} = cardSlice.actions

export default cardSlice.reducer