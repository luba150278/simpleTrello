export enum EditListActionTypes {
  EDIT_LIST = 'EDIT_LIST',
  EDIT_LIST_SUCCESS = 'EDIT_LIST_SUCCESS',
  EDIT_LIST_ERROR = 'EDIT_LIST_ERROR',
}

export interface EditListState {
  edited: boolean;
  error: null | string;
}

interface EditListAction {
  type: EditListActionTypes.EDIT_LIST;
  payload: boolean;
}
interface EditListSuccessAction {
  type: EditListActionTypes.EDIT_LIST_SUCCESS;
  payload: boolean;
}
interface EditListErrorAction {
  type: EditListActionTypes.EDIT_LIST_ERROR;
  payload: string;
}
export type EditListActions = EditListAction | EditListSuccessAction | EditListErrorAction;
