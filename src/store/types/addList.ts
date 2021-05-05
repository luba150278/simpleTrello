export enum AddListActionTypes {
  ADD_LIST = 'ADD_LIST',
  ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS',
  ADD_LIST_ERROR = 'ADD_LIST_ERROR',
}

export interface AddListState {
  added: boolean;
  error: null | string;
}

interface AddListAction {
  type: AddListActionTypes.ADD_LIST;
  payload: boolean;
}
interface AddListSuccessAction {
  type: AddListActionTypes.ADD_LIST_SUCCESS;
  payload: boolean;
}
interface AddListErrorAction {
  type: AddListActionTypes.ADD_LIST_ERROR;
  payload: string;
}
export type AddListActions = AddListAction | AddListSuccessAction | AddListErrorAction;
