import React, {FC} from 'react';
import './TaskMenu.scss'
import {TaskI} from "../../../../controller/task.controller";

const TaskMenu:FC<TaskI> = (
  {
    title,
    id,
    card_id,
    completed,
    percent,
    description,
    deadline,
    start,
  },
) => {
  return (
    <div className={`task-menu ${title ? 'task-menu_active' : 'task-menu_none'}`}>
      <h3 className={'task-menu__title'}>{title}</h3>
      {completed ? <p>Done</p>  : <p>Progress</p>}
    </div>
  );
};

export default TaskMenu;