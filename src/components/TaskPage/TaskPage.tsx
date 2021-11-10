import React, {createContext, useEffect, useState} from 'react';
import './TaskPage.scss'
import TaskList from "./TaskList/TaskList";
import TaskController from "../../controller/task.controller";
import {useParams} from "react-router-dom";
import TaskMenu from "./TaskMenu/TaskMenu";

interface SelectedTaskI {
  index: number,
  setIndex: (x: number) => void
}

export const SelectedTask = createContext<SelectedTaskI>({
  index: 0,
  setIndex: () => {}
})

const TaskPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {card_id} = useParams<any>()
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  useEffect(() => {
    TaskController.getAll(Number(card_id)).then(() => setLoading(true))
  },[card_id])

  return (
    <div className={'task-page'}>
      {loading ?
      <div className={'task-page__container'}>
        <SelectedTask.Provider value={{index: currentIndex, setIndex: setCurrentIndex}}>
          <TaskList/>
          {currentIndex > -1 ? <TaskMenu/> : null}
        </SelectedTask.Provider>
      </div> : null}
    </div>
  );
};

export default TaskPage;