import { IAlert } from '../interfaces/inrefaces';

export function callAlert(isShow: boolean, isDanger: boolean, text: string): IAlert {
  return { isShow, isDanger, text };
}
