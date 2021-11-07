import React, {FC, useContext, useEffect, useState} from 'react';
import './TaskMenu.scss'
import TaskController from "../../../controller/task.controller";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {SelectedTask} from "../TaskPage";

interface Menu {
  index: number
}

const TaskMenu: FC<Menu> = ({index}) => {
  let task = useSelector((state: RootState) => state.task[index])
  const [completedTask, setCompletedTask] = useState<boolean>(false)

  const indexControl = useContext(SelectedTask)

  useEffect(() => {
    setCompletedTask(task?.completed)
  }, [task])


  return task?.id ?
    <div className={`task-menu ${task.title ? 'task-menu_active' : 'task-menu_none'}`}>

      <div className={'task-menu__close'}>
        <div className="task-menu__close_img" onClick={() => indexControl.setIndex(-1)}/>
      </div>
      <div className={'task-menu__title'}>
        <div className="task-menu__checkbox">
          <div className={`task__checkbox ${completedTask ? 'task__checkbox_completed' : ''}`}
               onClick={() => {
                 TaskController.changeStatus(task.id, !task.completed, index).then(() => {
                   setCompletedTask(!completedTask)
                 })
               }}
          />
        </div>
        <p className={'task-menu__title_text'}>{task.title}</p>
      </div>
    </div> : null
};

export default TaskMenu;