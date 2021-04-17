import { IList } from './list-interface';

export interface IBoard {
  id: number;
  title: string;
  cards: IList[];
}
