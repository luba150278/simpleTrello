import { ILists } from '../../interfaces/inrefaces';

export interface ListsState {
  getLists: ILists;
  loading: boolean;
  error: null | string;
}
export enum ListsActionTypes {
  FETCH_LISTS = 'FETCH_LISTS',
  FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS',
  FETCH_LISTS_ERROR = 'FETCH_LISTS_ERROR',
}

interface FetchListsAction {
  type: ListsActionTypes.FETCH_LISTS;
}
interface FetchListsSuccessAction {
  type: ListsActionTypes.FETCH_LISTS_SUCCESS;
  payload: ILists;
}
interface FetchListsErrorAction {
  type: ListsActionTypes.FETCH_LISTS_ERROR;
  payload: string;
}
export type ListsAction = FetchListsAction | FetchListsSuccessAction | FetchListsErrorAction;
