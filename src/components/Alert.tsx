import React from 'react';
import { IAlert } from '../interfaces/inrefaces';

export const Alert: React.FC<IAlert> = ({ isShow, isDanger, text }) =>
  isShow ? (
    <div className={isDanger ? 'alert alert-danger' : 'alert alert-success'} role="alert">
      {text}
    </div>
  ) : (
    <></>
  );
