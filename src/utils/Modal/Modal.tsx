import React from 'react';
import './Modal.scss'

const Modal = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div className={'modal-container'}>
      {props.children}
    </div>
  );
};

export default Modal;