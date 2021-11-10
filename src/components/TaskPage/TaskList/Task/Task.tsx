import React, {FC, useContext, useEffect, useState} from 'react';
import TaskController, {TaskElem,} from "../../../../controller/task.controller";
import './Task.scss'
import {SelectedTask} from "../../TaskPage";
import {options} from "../../TaskMenu/TaskMenu";

const Task: FC<TaskElem> = (
  {
    task,
    index
  },
) => {

  const indexControl = useContext(SelectedTask)

  const [deadline, setDeadline] = useState<string>('')

  const [completedTask, setCompletedTask] = useState<boolean>(task.completed)

  const [selected] = useState<boolean>(false)



  useEffect(() => {
    if(task?.deadline){
      setDeadline(new Date(Date.parse(task.deadline))
        // @ts-ignore
        .toLocaleString('en-us', {...options, year: undefined})
      )
    }
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
          <p className={`task__deadline ${task.completed && task.deadline? 'task__deadline_done'
            : task.deadline ?
              Date.parse(task.deadline) <= Date.now() ?
                'task__deadline_end'
                : ''
              : 'task__deadline_continue'}`}
          >{deadline}</p>
        </div>
      </div>
  );
};

export default Task;