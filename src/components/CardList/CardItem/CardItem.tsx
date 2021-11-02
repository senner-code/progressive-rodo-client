import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import TaskController, {Task} from "../../../controller/task.controller";
import Input from "../../../utils/Input";
import './CardItem.scss'

const CardItem = () => {

  const [loading, setLoading] = useState<boolean>(false)

  const [taskList, setTaskList] = useState<Task[]>()

  const [title, setTitle] = useState<string>('')


  const {card_id} = useParams<any>()


  const add = async () => {
    setLoading(false)
    TaskController.add(card_id, title).then(task => {
      // @ts-ignore
      setTaskList([...taskList,task])
      setLoading(true)
    })
  }

  useEffect(() => {
    TaskController.getAll(Number(card_id)).then(list => {
      setTaskList(list)
      setLoading(true)
    })
  },[card_id])

  return (
    <div className={'card-item'}>
      {loading ?
        <div className={'card-item__task-list'}>
          {taskList?.map((task,index) =>
            <span key={index}>{task.title}</span>
          )}

          <span onClick={() => add()}>Add new </span>
          <Input id={'task-list__add'} type={'text'} placeholder={'Task'} value={title} setValue={setTitle}/>
        </div>
        : null
      }
    </div>
  );
};

export default CardItem;