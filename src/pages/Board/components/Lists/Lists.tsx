/* eslint-disable no-console */
import React from 'react';
// import { useActions } from '../../../../hooks/useActions';
// import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import Card from './components/Card/Card';
import './lists.css';
import ListMain from './components/ListsMain/ListMain';
import ListInner from './components/ListInner/ListInner';
import { ILists } from '../../../../interfaces/inrefaces';
import { ANY_LIST_YET } from '../../../../common/constans/messages';

type Props = {
  url: string;
  boardID: string;
  getLists: ILists;
};

const Lists: React.FC<Props> = ({ url, boardID, getLists }) => {
  const arr = Object.keys(getLists.lists);
  const arrLenght = arr.length;

  const lists =
    arrLenght !== 0 ? (
      arr.map((id) => {
        const list = getLists.lists[Number(id)];
        const cards = Object.keys(list.cards).map((idCard) => {
          const card = list.cards[Number(idCard)];
          return <Card key={card.id} card={card} url={url} boardID={boardID} listID={Number(id)} />;
        });

        return <ListInner key={id} list={list} url={url} id={id} boardID={boardID} cards={cards} />;
      })
    ) : (
      <h2>{ANY_LIST_YET}</h2>
    );

  return <ListMain url={url} arrLenght={arrLenght} boardID={boardID} lists={lists} />;
};

export default Lists;
