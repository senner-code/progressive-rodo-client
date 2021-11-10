import React, {FC, useContext, useEffect, useState} from 'react';
import './TaskList.scss'
import Task from "./Task/Task";
import Input from "../../../utils/Input";
import {useParams} from "react-router-dom";
import TaskController from "../../../controller/task.controller";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {SelectedTask} from "../TaskPage";
import CardController from "../../../controller/card.controller";
import AdapterDateMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';


const TaskList:FC = () => {
  const {card_id,card_name} = useParams<any>()
  const list = useSelector((state:RootState) => state.taskList)
  const index = useContext(SelectedTask).index


  const [change, setChange] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [listName, setListName] = useState<string>('')
  const [calendar, setCalendar] = useState<boolean>(false)

  const [deadline, setDeadline] = useState<any>(null)

  useEffect(() => {
    setListName(card_name)
  },[card_name])

  useEffect(() => {
    if(deadline){

    }
  },[deadline])

  //ОПТИМИЗИРОВАТЬ (ЧЕРЕЗ  РЕФ наверное)
  const add = async () => {
    TaskController.add(card_id, title, deadline ? deadline.format() : null).then(() =>{
      setTitle('')
    })
  }

  useEffect(() => {
    return () => {
      setChange(false)
      setListName('')
    }
  },[])

  return (
    <div className={`task-list ${index > -1 ? 'task-list_active' : 'task-list_none'}`}>
      <div className={'task-list__name'}>
        {change ?
          <div className={'task-list__title_active'}>
            <Input class={'task-list__title_active_text'} type={'text'} value={listName} setValue={setListName} placeholder={''}/>
            <button className={'task-list__title_active_button'} onClick={() => {
              if(card_name !== listName && listName !== '') CardController.changeName(card_id, listName).then(() => {setChange(false)})}
            }>Confirm</button>
          </div>:
          <h3 className={'task-list__title'} onClick={() => setChange(true)}>{listName}</h3>}
      </div>
      <div className={'task-list__container'}>
        {list.map((task,index) => <Task key={task.id} task={task} index={index}/>)}
      </div>
      <div className={'task task-list__add'} onKeyDown={event => title ? event.keyCode === 13 ? add().then() : null :null}>
        <div className={`task-list__add_start ${calendar ? 'task-list__add_start_active':''}`}>
          <div className={'task__checkbox'}/>
          <Input class={`task-list_input`} type={'text'} placeholder={'Add task'} value={title} setValue={setTitle}/>
        </div>
        <div className={'task-list__add__datepicker'}>
          {calendar ?
            <LocalizationProvider dateAdapter={AdapterDateMoment}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={deadline}
                onChange={(newValue) => {
                  setDeadline(newValue);
                }}
              />
            </LocalizationProvider>
            :null
          }
        </div>
        <svg className={'task-list__add_calendar'} onClick={() => setCalendar(!calendar)} height={'30px'} width={'30px'} viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g height={'30px'} width={'30px'}  transform="translate(30.000000, 478.000000)">
            <path d="M19.6-424h-35.2c-2.4,0-4.4-2-4.4-4.4v-32.3c0-2.4,1.6-4.4,3.7-4.4h2.2v2.9h-2.2     c-0.3,0-0.7,0.6-0.7,1.5v32.3c0,0.8,0.7,1.5,1.5,1.5h35.2c0.8,0,1.5-0.7,1.5-1.5v-32.3c0-0.9-0.5-1.5-0.7-1.5h-2.2v-2.9h2.2     c2,0,3.7,2,3.7,4.4v32.3C24-426,22-424,19.6-424"/>
            <path d="M-9.7-459.2c-0.8,0-1.5-0.7-1.5-1.5v-5.9c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v5.9     C-8.3-459.9-8.9-459.2-9.7-459.2"/>
            <path d="M13.7-459.2c-0.8,0-1.5-0.7-1.5-1.5v-5.9c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v5.9     C15.2-459.9,14.5-459.2,13.7-459.2" id="Fill-135"/>
            <polygon points="-5.3,-465.1 9.3,-465.1 9.3,-462.1 -5.3,-462.1    "/>
            <polygon points="-17.1,-456.3 21.1,-456.3 21.1,-453.3 -17.1,-453.3    "/>
            <polygon points="15.2,-450.4 18.1,-450.4 18.1,-447.5 15.2,-447.5    "/>
            <polygon points="9.3,-450.4 12.3,-450.4 12.3,-447.5 9.3,-447.5    "/>
            <polygon points="3.5,-450.4 6.4,-450.4 6.4,-447.5 3.5,-447.5    "/>
            <polygon points="-2.4,-450.4 0.5,-450.4 0.5,-447.5 -2.4,-447.5    "/>
            <polygon points="-8.3,-450.4 -5.3,-450.4 -5.3,-447.5 -8.3,-447.5    "/>
            <polygon points="15.2,-444.5 18.1,-444.5 18.1,-441.6 15.2,-441.6    "/>
            <polygon points="9.3,-444.5 12.3,-444.5 12.3,-441.6 9.3,-441.6    "/>
            <polygon points="3.5,-444.5 6.4,-444.5 6.4,-441.6 3.5,-441.6    "/>
            <polygon points="-2.4,-444.5 0.5,-444.5 0.5,-441.6 -2.4,-441.6    "/>
            <polygon points="-8.3,-444.5 -5.3,-444.5 -5.3,-441.6 -8.3,-441.6    "/>
            <polygon points="-14.1,-444.5 -11.2,-444.5 -11.2,-441.6 -14.1,-441.6    "/>
            <polygon points="15.2,-438.7 18.1,-438.7 18.1,-435.7 15.2,-435.7    "/>
            <polygon points="9.3,-438.7 12.3,-438.7 12.3,-435.7 9.3,-435.7    "/>
            <polygon points="3.5,-438.7 6.4,-438.7 6.4,-435.7 3.5,-435.7    "/>
            <polygon points="-2.4,-438.7 0.5,-438.7 0.5,-435.7 -2.4,-435.7    "/>
            <polygon points="-8.3,-438.7 -5.3,-438.7 -5.3,-435.7 -8.3,-435.7    "/>
            <polygon points="-14.1,-438.7 -11.2,-438.7 -11.2,-435.7 -14.1,-435.7    "/>
            <polygon points="9.3,-432.8 12.3,-432.8 12.3,-429.9 9.3,-429.9    "/>
            <polygon points="3.5,-432.8 6.4,-432.8 6.4,-429.9 3.5,-429.9    "/>
            <polygon points="-2.4,-432.8 0.5,-432.8 0.5,-429.9 -2.4,-429.9    "/>
            <polygon points="-8.3,-432.8 -5.3,-432.8 -5.3,-429.9 -8.3,-429.9    "/>
            <polygon points="-14.1,-432.8 -11.2,-432.8 -11.2,-429.9 -14.1,-429.9    "/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TaskList;