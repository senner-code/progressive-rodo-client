import React, {FC, useEffect, useState} from 'react';
import CardController, {Card} from "../../controller/card.controller";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Link} from "react-router-dom";
import './CardList.scss'

interface CardL{
  add: boolean,
  children?: React.ReactNode,
}

const CardList:FC<CardL> = (props) => {
  const user_id = useSelector((state: RootState) => state.user.id)
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<Card[]>([])
  const [active, setActive] = useState<number>(-1)

  useEffect(() => {
    // @ts-ignore
    if(list[0]){
      setLoading(false)
      CardController.add(user_id, 'Untiled').then(card => {
        // @ts-ignore
        setList([...list, card])
        setLoading(true)
      })
    }
    // eslint-disable-next-line
  },[props.add])


  useEffect(() => {
    CardController.getAll(user_id).then(result => {
      setList([...result])
      setLoading(true)
    })
  }, [user_id])



  return (
    loading ?
      <div className={'card-list'}>
        {list?.map(card => <Link onClick={() => setActive(card.id)} className={active === card.id ? 'card-list__item card-list__item_active' : 'card-list__item'} key={card.id} to={`/dashboard/card/${card.id}/${card.name}`}>
          <svg  id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle cx="5" cy="6" fill={'rgba(22, 126, 217, 0.73)'} id="XMLID_303_" r="1" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
            <circle cx="5" cy="16" fill={'rgba(22, 126, 217, 0.73)'} id="XMLID_305_" r="1" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
            <circle cx="5" cy="26" fill={'rgba(22, 126, 217, 0.73)'} id="XMLID_304_" r="1" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
            <line fill={'rgba(22, 126, 217, 0.73)'} id="XMLID_29_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="10" x2="28" y1="6" y2="6"/>
            <line fill={'rgba(22, 126, 217, 0.73)'} id="XMLID_30_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="10" x2="28" y1="16" y2="16"/>
            <line fill={'rgba(22, 126, 217, 0.73)'} id="XMLID_31_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="10" x2="28" y1="26" y2="26"/>
          </svg>
          <p className={'card-list__item__name'}>{card.name}</p>
        </Link>)}
      </div>
      : null
  );
};

export default CardList;