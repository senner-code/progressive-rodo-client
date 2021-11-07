import React, {FC} from 'react';
import './EmptyList.scss'

const EmptyList:FC = () => {
  return (
    <div className={'task-page task-page_empty'}>
      <h1 className={'task-page_empty__title'}>Don`t see anything? <br/> Choose / Create list and start!
      </h1>
    </div>
  );
};

export default EmptyList;