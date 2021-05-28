import React from 'react';
import { IAlert } from '../interfaces/inrefaces';

type Props = {
  alertState: IAlert;
};
export const Alert: React.FC<Props> = ({ alertState }) =>
  alertState.isShow ? (
    <div className={alertState.isDanger ? 'alert alert-danger' : 'alert alert-success'} role="alert">
      {alertState.text}
    </div>
  ) : (
    <></>
  );
