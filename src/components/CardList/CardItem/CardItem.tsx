import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import TaskController, {Task} from "../../../controller/task.controller";

const CardItem = () => {

  const [loading, setLoading] = useState<boolean>(false)

  const [taskList, setTaskList] = useState<Task[]>()


  const {id} = useParams<any>()

  useEffect(() => {
    TaskController.getAll(Number(id)).then(list => {
      setTaskList(list)
      setLoading(true)
    })
  },[])

  return (
    <div className={'card-item'}>
      {loading ?
        <div className={'card-item__task-list'}>
          {taskList?.map((task,index) => <span key={index}>{task.title}</span>)}
        </div>
        : null
      }
    </div>
  );
};

export default CardItem;