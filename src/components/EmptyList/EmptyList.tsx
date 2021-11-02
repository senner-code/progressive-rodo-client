import React, {FC} from 'react';
import './EmptyList.scss'

const EmptyList:FC = () => {
  return (
    <div className={'card-item card-item_empty'}>
      <h1 className={'card-item_empty__title'}>Don`t see anything? <br/> Choose / Create list and start!
      </h1>
    </div>
  );
};

export default EmptyList;