import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../controller/user.controller";


const initialState: User = {
  email: "",
  id: 0,
  name: "",
  isAuth: false
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state,user:PayloadAction<User>) => {
      state.isAuth = true
      state.id = user.payload.id
      state.email = user.payload.email
      state.name = user.payload.name
    },

    setAuthManual: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  }
})

export const {setUser, setAuthManual} = userSlice.actions

export default userSlice.reducer