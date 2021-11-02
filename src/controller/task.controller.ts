import TaskService from "../service/task.service";

export interface Task {
  card_id: number
  title: string
  description: string
  start: string
  deadline: string
  percent: number
  completed: boolean
}

class TaskController {

  static async getAll(card_id: number): Promise<Task[]> {
    try {
      return await TaskService.getAll(card_id)
    } catch (e) {
      throw e
    }
  }

  static async add(card_id: number, name: string): Promise<Task> {
    try {
      return await TaskService.add(card_id, name)
    } catch (e) {
      throw e
    }
  }

}

export default TaskController
