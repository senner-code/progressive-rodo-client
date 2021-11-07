import React, {FC, useContext, useEffect, useState} from 'react';
import TaskController, {TaskElem,} from "../../../../controller/task.controller";
import './Task.scss'
import {SelectedTask} from "../../TaskPage";

const Task: FC<TaskElem> = (
  {
    task,
    index
  },
) => {

  const indexControl = useContext(SelectedTask)

  const [completedTask, setCompletedTask] = useState<boolean>(task.completed)

  const [selected] = useState<boolean>(false)

  useEffect(() => {
    setCompletedTask(task.completed)
  },[task])

  return (

      <div className={selected ? 'task task_active' : 'task'} id={`${task.id}`}>
        <div className={'task_check'}>
          <div className={completedTask ? "task__checkbox task__checkbox_completed" : "task__checkbox"}
               onClick={() => {
                 TaskController.changeStatus(task.id, !task.completed, index).then(() => {
                   setCompletedTask(!completedTask)
                 })
               }}
          />
        </div>
        <div className={'task__info'} onClick={(e) => {
          e.stopPropagation()
          if(indexControl.index === index){
            indexControl.setIndex(-1)
          } else{
            indexControl.setIndex(index)
          }
        }}>
          <p className={'task__title'}>{task.title}</p>
          <p className={'task__deadline'}>{task.deadline}</p>
        </div>
      </div>
  );
};

export default Task;