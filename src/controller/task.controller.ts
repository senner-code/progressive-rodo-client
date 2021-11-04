import TaskService from "../service/task.service";

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

class TaskController {

  static async getAll(card_id: number): Promise<TaskI[]> {
    try {
      return await TaskService.getAll(card_id)
    } catch (e) {
      throw e
    }
  }

  static async add(card_id: number, name: string): Promise<TaskI> {
    try {
      return await TaskService.add(card_id, name)
    } catch (e) {
      throw e
    }
  }

  static async changeStatus(task_id: number, status: boolean): Promise<TaskI> {
    try {
      return await TaskService.changeStatus(task_id, status)
    } catch (e) {
      throw e
    }
  }

}

export default TaskController
