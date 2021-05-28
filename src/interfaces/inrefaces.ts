import { LegacyRef } from 'react';

export interface IUser {
  id: number;
  username: string;
}

export interface ICard {
  id: number;
  position: number;
  title: string;
  description: string;
  users: number[];
}

export interface IList {
  id: number;
  title: string;
  cards: ICard[];
  position: number;
}

export interface ILists {
  title: string;
  users: IUser[];
  lists: IList[];
}

export interface IBoard {
  id: number;
  title: string;
}

export interface IBoards {
  boards: IBoard[];
}

export interface IAlert {
  isShow: boolean;
  isDanger: boolean;
  text: string;
}

export interface IInput {
  title: string;
  ph: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent) => void;
  onKeyUp: () => void;
  onBlur: () => void;
  cln: string;
  clni: string;
  ref: LegacyRef<HTMLInputElement> | undefined;
}
