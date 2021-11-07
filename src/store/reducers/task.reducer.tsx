import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskElem, TaskI} from "../../controller/task.controller";

const initialState: TaskI[] = []

export const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    setTaskList: (state,taskList:PayloadAction<TaskI[]>) => {
      state.splice(0,state.length)
      taskList.payload.forEach(task => state.push(task))
    },

    changeTask: (state, action:PayloadAction<TaskElem>) => {
      state[action.payload.index] = action.payload.task
    },

    addTask: (state, action:PayloadAction<TaskI>) => {
      state.push(action.payload)
    },
  }
})

export const {setTaskList, changeTask, addTask} = taskSlice.actions

export default taskSlice.reducer