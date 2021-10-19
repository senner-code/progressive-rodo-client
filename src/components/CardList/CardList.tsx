import React, {FC, useEffect, useState} from 'react';
import CardController, {Card} from "../../controller/card.controller";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import Input from "../../utils/Input";

const CardList: FC = () => {

  const user_id = useSelector((state: RootState) => state.user.id)
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [list, setList] = useState<Card[]>()


  const add = async () => {
    setLoading(false)
    CardController.add(user_id, name).then(card => {
      // @ts-ignore
      setList([...list,card])
      setLoading(true)
    })
  }

  useEffect(() => {
    CardController.getAll(user_id).then(result => {
      setList([...result])
      setLoading(true)
    })
  }, [])

  return (
    <div className={'card-list'}>
      <span>Tasks List</span>
      {loading ?
        <div>
          {list?.map(card => <span>{card.name}</span>)}
          <button onClick={() => add()}>Add new</button>
          <Input placeholder={'name'} value={name} setValue={setName} type={'text'}/>
        </div>
        : null}
    </div>
  );
};

export default CardList;