import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskElem, TaskI} from "../../controller/task.controller";

interface indexI {
  index: number
}

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

    deleteTask: (state, action:PayloadAction<indexI>) => {
      state.splice(action.payload.index, 1)
    },

    clearTaskList: (state) => {
      const length = state.length
      for (let i = 0; i < length; i++) {
        state.pop()
      }
    }

  }
})

export const {setTaskList, changeTask, addTask, deleteTask, clearTaskList} = taskSlice.actions

export default taskSlice.reducer