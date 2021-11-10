import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import taskReducer from "./reducers/task.reducer";
import cardReducer from "./reducers/card.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    taskList: taskReducer,
    cardList: cardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch