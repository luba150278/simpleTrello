export enum DeleteBoardActionTypes {
  DELETE_BOARD = 'DELETE_BOARD',
  DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS',
  DELETE_BOARD_ERROR = 'DELETE_BOARD_ERROR',
}

export interface DeleteBoardState {
  deleted: boolean;
  error: null | string;
}
interface DeleteBoardAction {
  type: DeleteBoardActionTypes.DELETE_BOARD;
  payload: boolean;
}
interface DeleteBoardSuccessAction {
  type: DeleteBoardActionTypes.DELETE_BOARD_SUCCESS;
  payload: boolean;
}
interface DeleteBoardErrorAction {
  type: DeleteBoardActionTypes.DELETE_BOARD_ERROR;
  payload: string;
}
export type DeleteBoardActions = DeleteBoardAction | DeleteBoardSuccessAction | DeleteBoardErrorAction;
