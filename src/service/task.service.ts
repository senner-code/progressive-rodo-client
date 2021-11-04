import $api from "../api";
import {TaskI} from "../controller/task.controller";

class TaskService {

  static async getAll(card_id: number):Promise<TaskI[]> {
    try {
      return (await $api.get<any>(`/auth/task/get_all/${card_id}`)).data
    }catch (e) {
      throw e
    }
  }

  static async add(card_id: number, title: string):Promise<TaskI> {
    try {
      return (await $api.post<any>('/auth/task/add', {card_id, title})).data
    }catch (e) {
      throw e
    }
  }

  static async changeStatus(task_id: number, completed: boolean):Promise<TaskI> {
    return (await $api.post<any>('/auth/task/change_complete', {task_id, completed})).data
  }
}

export default TaskService