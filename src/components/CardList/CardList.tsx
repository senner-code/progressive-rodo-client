import React, {FC, useEffect, useState} from 'react';
import CardController from "../../controller/card.controller";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import './CardList.scss'
import Card from "./Card/Card";


const CardList:FC = () => {
  const user_id = useSelector((state: RootState) => state.user.id)
  const list = useSelector((state:RootState) => state.cardList)
  const [active, setActive] = useState<number>(-1)

  useEffect(() => {
    CardController.getAll(user_id).then()
  }, [user_id])

  return (
      <div className={'card-list'}>
        {list?.map((card, index) => <Card key={index} {...card} active={active} setActive={setActive}/>)}
      </div>
  )
};

export default CardList;