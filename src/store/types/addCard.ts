export enum AddCardActionTypes {
  ADD_CARD = 'ADD_CARD',
  ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS',
  ADD_CARD_ERROR = 'ADD_Card_ERROR',
}

export interface AddCardState {
  added: boolean;
  error: null | string;
}

interface AddCardAction {
  type: AddCardActionTypes.ADD_CARD;
  payload: boolean;
}
interface AddCardSuccessAction {
  type: AddCardActionTypes.ADD_CARD_SUCCESS;
  payload: boolean;
}
interface AddCardErrorAction {
  type: AddCardActionTypes.ADD_CARD_ERROR;
  payload: string;
}
export type AddCardActions = AddCardAction | AddCardSuccessAction | AddCardErrorAction;
