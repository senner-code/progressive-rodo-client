import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import taskReducer from "./reducers/task.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch