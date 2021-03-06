/* eslint-disable no-console */
import React, { useState } from 'react';
import Card from './components/Card/Card';
import './lists.css';
import ListMain from './components/List/ListsMain/ListMain';
import ListInner from './components/List/ListInner/ListInner';
import { ANY_LIST_YET } from '../../../../common/constans/messages';
import { ILists } from '../../../../interfaces/inrefaces';

type Props = {
  getLists: ILists;
};

const Lists: React.FC<Props> = ({ getLists }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardVal = (cardID: number): void => {
    setCurrentCard(cardID);
  };
  const [currentCardTitle, setCurrentCardTitle] = useState('');
  const cardTitleVal = (cardTitle: string): void => {
    setCurrentCardTitle(cardTitle);
  };
  const arr = Object.keys(getLists.lists).sort((a, b) => {
    const first = getLists.lists[Number(a)].position;
    const second = getLists.lists[Number(b)].position;
    return first > second ? 1 : -1;
  });

  let maxCardPos = 0;
  let maxListPos = 0;
  const arrLenght = arr.length;
  const lists =
    arrLenght !== 0 ? (
      arr.map((id, i) => {
        const list = getLists.lists[Number(id)];
        if (i === arrLenght - 1) maxListPos = list.position;
        maxCardPos = 0;
        const cds = Object.keys(list.cards).sort((a, b) => {
          const first = list.cards[Number(a)].position;
          const second = list.cards[Number(b)].position;
          return first > second ? 1 : -1;
        });
        const cards = cds.map((idCard) => {
          const card = list.cards[Number(idCard)];
          maxCardPos = maxCardPos < card.position ? card.position : maxCardPos;
          return (
            <Card
              key={card.id}
              card={card}
              listID={Number(id)}
              onCurrentCard={cardVal}
              onCurrentCardTitle={cardTitleVal}
              activeCard={currentCard}
            />
          );
        });
        return (
          <ListInner
            key={id}
            list={list}
            id={id}
            cards={cards}
            maxCardPos={maxCardPos}
            currentCard={currentCard.toString()}
            currentCardTitle={currentCardTitle}
          />
        );
      })
    ) : (
      <h2>{ANY_LIST_YET}</h2>
    );

  return <ListMain arrLenght={arrLenght} maxListPos={maxListPos} lists={lists} />;
};

export default Lists;
