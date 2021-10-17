import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../service/user.service";


const initialState: User = {
  user: {
    email: "",
    id: 0,
    name: "",
    isAuth: false
  }
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state,user:PayloadAction<User>) => {
      state.user.isAuth = true
      state.user.id = user.payload.user.id
      state.user.email = user.payload.user.email
      state.user.name = user.payload.user.name
    },
    setAuthManual: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload
    }
  }
})

export const {setUser, setAuthManual} = userSlice.actions

export default userSlice.reducer