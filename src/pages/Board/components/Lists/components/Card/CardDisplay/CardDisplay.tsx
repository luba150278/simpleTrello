import React from 'react';
import { ICard } from '../../../../../../../interfaces/inrefaces';

type Props = {
  card: ICard;
};
const CardDisplay: React.FC<Props> = ({ card }) => (
  <div>
    <label>Description</label>
    <textarea>{card.description}</textarea>
  </div>
);

export default CardDisplay;
