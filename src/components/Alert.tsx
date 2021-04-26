import React from 'react';

type AlertType = {
  show: boolean;
  text: string;
  danger: boolean;
};
export const Alert: React.FC<AlertType> = ({ show, text, danger }) =>
  show ? (
    <div className={danger ? 'alert alert-danger' : 'alert alert-success'} role="alert">
      {text}
    </div>
  ) : (
    <></>
  );
