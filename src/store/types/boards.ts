import { IBoards } from '../../interfaces/inrefaces';

export interface BoardsState {
  getBoards: IBoards;
  loading: boolean;
  error: boolean | string;
}
export enum BoardsActionTypes {
  FETCH_BOARDS = 'FETCH_BOARDS',
  FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS',
  FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR',
}

interface FetchBoardsAction {
  type: BoardsActionTypes.FETCH_BOARDS;
}
interface FetchBoardsSuccessAction {
  type: BoardsActionTypes.FETCH_BOARDS_SUCCESS;
  payload: IBoards;
}
interface FetchBoardsErrorAction {
  type: BoardsActionTypes.FETCH_BOARDS_ERROR;
  payload: string;
}
export type BoardsAction = FetchBoardsAction | FetchBoardsSuccessAction | FetchBoardsErrorAction;
