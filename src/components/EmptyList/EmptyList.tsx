import React, {FC, useContext} from 'react';
import './EmptyList.scss'
import {Hidden} from "../App";

const EmptyList:FC = () => {
  const {setHiddenNavbar} = useContext(Hidden)
  setHiddenNavbar(false)
  return (
    <div className={`task-page_empty ${window.outerWidth < 600 ? 'task-page_empty_none' : ''}`}>
      <h1 className={'task-page_empty__title'}>Don`t see anything? <br/> Choose / Create list and start!
      </h1>
    </div>
  );
};

export default EmptyList;