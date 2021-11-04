import React, {FC, useState} from 'react';
import TaskController, {TaskI} from "../../../../controller/task.controller";
import './Task.scss'

const Task: FC<TaskI> = (
  {
    title,
    id,
    card_id,
    completed,
    percent,
    description,
    deadline
  }
) => {


  const [complete, setComplete] = useState<boolean>(completed)

  return (
    //Сделать функцию по измененению чекед , но с таймаутом с рандомным промежутком 0.5 секунд секунд, при этом в list изменить
    <div className={'task'} id={`${id}`}>

      <div className="task_check">
        <div className={complete ? "task__checkbox task__checkbox_completed" : "task__checkbox"}
             onClick={() => {
               TaskController.changeStatus(id, !completed).then(() => {
                 setComplete(!complete)
               })
             }}
        />
      </div>

      <div className="task__info">

        <p className="task__title">{title}</p>
        <p className="task__deadline">{deadline}</p>
      </div>
    </div>

  );
};

export default Task;