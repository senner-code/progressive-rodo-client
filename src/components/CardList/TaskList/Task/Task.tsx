import React, {Dispatch, FC, useEffect, useState} from 'react';
import TaskController, {TaskI} from "../../../../controller/task.controller";
import './Task.scss'


interface TaskControl extends TaskI{
  setTaskMenu : Dispatch<TaskI>
  menuTask: TaskI | undefined
}

const Task: FC<TaskControl> = (
  {
    title,
    id,
    card_id,
    completed,
    percent,
    description,
    deadline,
    start,
    setTaskMenu,
    menuTask
  }
) => {


  useEffect(() => {

    menuTask?.id === id ? setSelected(true) : setSelected(false)

  }, [menuTask])

  const [completedTask, setCompletedTask] = useState<boolean>(completed)

  const [selected, setSelected] = useState<boolean>(false)

  return (
    //Сделать функцию по измененению чекед , но с таймаутом с рандомным промежутком 0.5 секунд секунд, при этом в list изменить
    <div className={selected ? 'task task_active' : 'task'} id={`${id}`}>

      <div className="task_check">
        <div className={completedTask ? "task__checkbox task__checkbox_completed" : "task__checkbox"}
             onClick={() => {
               TaskController.changeStatus(id, !completed).then(() => {
                 setCompletedTask(!completedTask)
               })
             }}
        />
      </div>

      <div className="task__info" onClick={(e) => {
        e.stopPropagation()
        if (menuTask?.id) {
          if(menuTask?.id !== id){
            setTaskMenu({id, title, completed: completedTask, deadline, description, card_id, percent, start})
          }else{
            setTaskMenu({id:0, title: '', completed: false, deadline: null, description: null, card_id: 0, percent: null, start:  null})
          }
        }else {
          setTaskMenu({id, title, completed:completedTask, deadline, description, card_id, percent, start})
        }
      }}>
        <p className="task__title">{title}</p>
        <p className="task__deadline">{deadline}</p>
      </div>
    </div>

  );
};

export default Task;