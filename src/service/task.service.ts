import $api from "../api";
import {Task} from "../controller/task.controller";

class TaskService {
  static async getAll(card_id: number):Promise<Task[]> {
    try {
      return (await $api.get<any>(`/auth/task/get_all/${card_id}`)).data
    }catch (e) {
      throw e
    }
  }

  static async add(card_id: number, title: string) {
    try {
      return (await $api.post<any>('/auth/task/add', {card_id, title})).data
    }catch (e) {
      throw e
    }
  }
}

export default TaskService