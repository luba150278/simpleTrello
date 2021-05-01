export enum AddCardActionTypes {
  /* ADD_Card = 'ADD_Card', */
  ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS',
  ADD_CARD_ERROR = 'ADD_Card_ERROR',
}

export interface AddCardState {
  added: boolean;
  error: null | string;
}
interface AddCardSuccessAction {
  type: AddCardActionTypes.ADD_CARD_SUCCESS;
  payload: boolean;
}
interface AddCardErrorAction {
  type: AddCardActionTypes.ADD_CARD_ERROR;
  payload: string;
}
export type AddCardActions = AddCardSuccessAction | AddCardErrorAction;
