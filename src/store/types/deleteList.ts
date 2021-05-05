export enum DeleteListActionTypes {
  DELETE_LIST = 'DELETE_LIST',
  DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS',
  DELETE_LIST_ERROR = 'DELETE_LIST_ERROR',
}

export interface DeleteListState {
  deleted: boolean;
  error: null | string;
}

interface DeleteListAction {
  type: DeleteListActionTypes.DELETE_LIST;
  payload: boolean;
}
interface DeleteListSuccessAction {
  type: DeleteListActionTypes.DELETE_LIST_SUCCESS;
  payload: boolean;
}
interface DeleteListErrorAction {
  type: DeleteListActionTypes.DELETE_LIST_ERROR;
  payload: string;
}
export type DeleteListActions = DeleteListAction | DeleteListSuccessAction | DeleteListErrorAction;
