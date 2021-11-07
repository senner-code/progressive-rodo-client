import TaskService from "../service/task.service";
import {store} from "../store/store";
import {addTask, changeTask, setTaskList} from "../store/reducers/task.reducer";

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

        const tempMassive:TaskI[] = []

        const sortedList = taskList.filter((elem) => {
          if(elem.completed){
            return elem
          }
          tempMassive.push(elem)
        })

        store.dispatch(setTaskList([...tempMassive ,...sortedList]))

      })
    } catch (e) {
      throw e
    }
  }

  static async add(card_id: number, name: string): Promise<any> {
    try {
      return TaskService.add(card_id, name).then((task) => {
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

}

export default TaskController
