export interface IUser {
  id: number;
  username: string;
}

export interface ICard {
  id: number;
  title: string;
  description: string;
  users: number[];
}

export interface IList {
  id: number;
  title: string;
  cards: ICard[];
}

export interface ILists {
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
