import React from 'react';
import { ICard } from '../../../../../interfaces/inrefaces';

type Props = {
  card: ICard;
};
const Card: React.FC<Props> = ({ card }) => (
  <li key={card.id} className="card list-item">
    <h4>{card.title}</h4>
    {card.description !== '' ? <p>{card.description}</p> : null}
  </li>
);

export default Card;
