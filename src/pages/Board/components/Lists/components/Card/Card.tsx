import React from 'react';
import { ICard } from '../../../../../../interfaces/inrefaces';

type Props = {
  card: ICard;
};
const Card: React.FC<Props> = ({ card }) => (
  <li className="card list-item">
    {card.title}
    {card.description !== '' ? <p>{card.description}</p> : null}
  </li>
);

export default Card;
