export enum DeleteListActionTypes {
  DELETE_LIST_SUCCESS = 'DELETE_List_SUCCESS',
  DELETE_LIST_ERROR = 'DELETE_List_ERROR',
}

export interface DeleteListState {
  deleted: boolean;
  error: null | string;
}
interface DeleteListSuccessAction {
  type: DeleteListActionTypes.DELETE_LIST_SUCCESS;
  payload: boolean;
}
interface DeleteListErrorAction {
  type: DeleteListActionTypes.DELETE_LIST_ERROR;
  payload: string;
}
export type DeleteListActions = DeleteListSuccessAction | DeleteListErrorAction;
