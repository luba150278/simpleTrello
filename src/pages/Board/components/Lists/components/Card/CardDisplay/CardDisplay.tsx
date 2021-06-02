import React from 'react';
import { ICard } from '../../../../../../../interfaces/inrefaces';

type Props = {
  card: ICard;
};
const CardDisplay: React.FC<Props> = ({ card }) => {
  const desc = card.description !== '' ? card.description : 'Type your description';
  const cln = card.description !== '' ? 'textArea' : 'textArea empty';
  return (
    <div>
      <label>Description</label>
      <textarea defaultValue={desc} className={cln} />
    </div>
  );
};

export default CardDisplay;
