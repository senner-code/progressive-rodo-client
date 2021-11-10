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

  static async add(card_id: number, title: string, deadline:string):Promise<TaskI> {
    try {
      return (await $api.post<any>('/auth/task/add', {card_id, title, deadline})).data
    }catch (e) {
      throw e
    }
  }

  static async changeStatus(task_id: number, completed: boolean):Promise<TaskI> {
    return (await $api.post<any>('/auth/task/change_complete', {task_id, completed})).data
  }

  static async deleteTask(task_id: number) {
    return (await $api.get<any>(`/auth/task/remove/${task_id}`)).data
  }

  static async changeTitle(task_id: number, title: string):Promise<TaskI> {
    return (await $api.post<any>(`/auth/task/change_title`, {task_id,title})).data
  }

  static async changeDeadline(task_id: number, deadline:string | null):Promise<TaskI> {
    return (await $api.post<any>(`/auth/task/change_deadline`, {task_id,deadline})).data
  }
}

export default TaskService