import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import './TaskPage.scss'
import TaskList from "./TaskList/TaskList";
import TaskController from "../../controller/task.controller";
import {useParams} from "react-router-dom";
import TaskMenu from "./TaskMenu/TaskMenu";
import {Hidden} from "../App";

interface SelectedTaskI {
  index: number,
  setIndex: (x: number) => void
}

export const SelectedTask = createContext<SelectedTaskI>({
  index: -1,
  setIndex: () => {}
})

const TaskPage:FC= () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {hiddenNavbar, setHiddenNavbar} = useContext(Hidden)
  const {card_id} = useParams<any>()
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  useEffect(() => {
    TaskController.getAll(Number(card_id)).then(() => setLoading(true))
  },[card_id])

  return (
    <SelectedTask.Provider value={{index: currentIndex, setIndex: setCurrentIndex}}>
    <div className={`task-page ${ window.outerWidth < 950 ? hiddenNavbar ? 'task-page_active' : 'task-page_hidden' : ''} `}>

      {(window.outerWidth < 950 && hiddenNavbar && currentIndex === -1)?
        <div className={`task-page__burger`}>
          <svg onClick={() => setHiddenNavbar(!hiddenNavbar)} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               width="24px" height="24px">
            <path
              d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
          </svg>
        </div>
        : null}

      {loading ?
      <div className={'task-page__container'}>
          <TaskList/>
          {currentIndex > -1 ? <TaskMenu/> : null}
      </div> : null}
    </div>
    </SelectedTask.Provider>
  );
};

export default TaskPage;