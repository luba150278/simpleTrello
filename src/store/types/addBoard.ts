interface IBoard {
  title: string;
}

export enum AddBoardActionTypes {
  ADD_BOARD = 'ADD_BOARD',
  ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS',
  ADD_BOARD_ERROR = 'ADD_BOARD_ERROR',
}

interface AddBoardAction {
  type: AddBoardActionTypes.ADD_BOARD;
}
interface AddBoardSuccessAction {
  type: AddBoardActionTypes.ADD_BOARD_SUCCESS;
  payload: IBoard;
}
interface AddBoardErrorAction {
  type: AddBoardActionTypes.ADD_BOARD_ERROR;
  payload: string;
}
export type AddBoardActions = AddBoardAction | AddBoardSuccessAction | AddBoardErrorAction;
