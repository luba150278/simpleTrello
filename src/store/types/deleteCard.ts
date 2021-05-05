export enum DeleteCardActionTypes {
  DELETE_CARD = 'DELETE_CARD',
  DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS',
  DELETE_CARD_ERROR = 'DELETE_CARD_ERROR',
}

export interface DeleteCardState {
  deleted: boolean;
  error: null | string;
}

interface DeleteCardAction {
  type: DeleteCardActionTypes.DELETE_CARD;
  payload: boolean;
}
interface DeleteCardSuccessAction {
  type: DeleteCardActionTypes.DELETE_CARD_SUCCESS;
  payload: boolean;
}
interface DeleteCardErrorAction {
  type: DeleteCardActionTypes.DELETE_CARD_ERROR;
  payload: string;
}
export type DeleteCardActions = DeleteCardAction | DeleteCardSuccessAction | DeleteCardErrorAction;
