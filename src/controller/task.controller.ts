import TaskService from "../service/task.service";
import {store} from "../store/store";
import {addTask, changeTask, deleteTask, setTaskList} from "../store/reducers/task.reducer";

export interface TaskI {
  id: number,
  card_id: number
  title: string
  description: string | null
  start: string | null
  deadline: string | null
  percent: number | null
  completed: boolean
}

export interface TaskElem {
  task: TaskI,
  index: number
}

class TaskController {

  static async getAll(card_id: number): Promise<any> {
    try {
      return TaskService.getAll(card_id).then(taskList => {
        store.dispatch(setTaskList(taskList))
      })
    } catch (e) {
      throw e
    }
  }

  static async add(card_id: number, name: string, deadline:string): Promise<any> {
    try {
      return TaskService.add(card_id, name, deadline).then((task) => {
        store.dispatch(addTask(task))
      })
    } catch (e) {
      throw e
    }
  }

  static async changeStatus(task_id: number, status: boolean, index: number): Promise<any> {
    try {
      return TaskService.changeStatus(task_id, status).then(task => {
        store.dispatch(changeTask({task, index}))
      })
    } catch (e) {
      throw e
    }
  }

  static async deleteTask(task_id:number,index: number): Promise<any> {
    try {
      return TaskService.deleteTask(task_id).then(() => {
        store.dispatch(deleteTask({index}))
      })
    }catch (e) {
      throw e
    }
  }

  static async changeTitle(title: string, task_id: number, index: number) {
    TaskService.changeTitle(task_id, title).then((task: TaskI) => {
      // const newTask:TaskI = Object.assign({}, task)
      // newTask.title = title
      store.dispatch(changeTask({task, index}))
    })
  }

  static async changeDeadline(task_id:number, deadline:string | null, index: number):Promise<any> {
    return TaskService.changeDeadline(task_id, deadline).then((task) => {
      console.log(task)
      return store.dispatch(changeTask({task, index}))
    })
  }
}

export default TaskController
