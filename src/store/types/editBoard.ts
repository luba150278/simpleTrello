export enum EditBoardActionTypes {
  /* ADD_BOARD = 'ADD_BOARD', */
  EDIT_BOARD_SUCCESS = 'EDIT_BOARD_SUCCESS',
  EDIT_BOARD_ERROR = 'EDIT_BOARD_ERROR',
}

export interface EditBoardState {
  edited: boolean;
  error: null | string;
}
interface EditBoardSuccessAction {
  type: EditBoardActionTypes.EDIT_BOARD_SUCCESS;
  payload: boolean;
}
interface EditBoardErrorAction {
  type: EditBoardActionTypes.EDIT_BOARD_ERROR;
  payload: string;
}
export type EditBoardActions = EditBoardSuccessAction | EditBoardErrorAction;
