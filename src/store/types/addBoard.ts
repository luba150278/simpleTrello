export enum AddBoardActionTypes {
  ADD_BOARD = 'ADD_BOARD',
  ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS',
  ADD_BOARD_ERROR = 'ADD_BOARD_ERROR',
}

export interface AddBoardState {
  added: boolean;
  error: null | string;
}

interface AddBoardAction {
  type: AddBoardActionTypes.ADD_BOARD;
  payload: boolean;
}
interface AddBoardSuccessAction {
  type: AddBoardActionTypes.ADD_BOARD_SUCCESS;
  payload: boolean;
}
interface AddBoardErrorAction {
  type: AddBoardActionTypes.ADD_BOARD_ERROR;
  payload: string;
}
export type AddBoardActions = AddBoardAction | AddBoardSuccessAction | AddBoardErrorAction;
