export enum EditBoardActionTypes {
  EDIT_BOARD = 'EDIT_BOARD',
  EDIT_BOARD_SUCCESS = 'EDIT_BOARD_SUCCESS',
  EDIT_BOARD_ERROR = 'EDIT_BOARD_ERROR',
}

export interface EditBoardState {
  edited: boolean;
  error: null | string;
}

interface EditBoardAction {
  type: EditBoardActionTypes.EDIT_BOARD;
  payload: boolean;
}
interface EditBoardSuccessAction {
  type: EditBoardActionTypes.EDIT_BOARD_SUCCESS;
  payload: boolean;
}
interface EditBoardErrorAction {
  type: EditBoardActionTypes.EDIT_BOARD_ERROR;
  payload: string;
}
export type EditBoardActions = EditBoardAction | EditBoardSuccessAction | EditBoardErrorAction;
