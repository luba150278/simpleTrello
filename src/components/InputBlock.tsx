import React from 'react';
import { IAlert, IInput } from '../interfaces/inrefaces';
import { Alert } from './Alert';

type Props = {
  alertState: IAlert;
  inputData: IInput;
};
const InputBlock: React.FC<Props> = ({ alertState, inputData }) => (
  <div className={inputData.cln}>
    <Alert alertState={alertState} />
    <input
      onChange={inputData.changeHandler}
      onKeyPress={inputData.onKeyPress}
      onKeyUp={inputData.onKeyUp}
      onBlur={inputData.onBlur}
      value={inputData.title}
      type="text"
      placeholder={inputData.ph}
      className={inputData.clni}
      ref={inputData.ref}
    />
  </div>
);

export default InputBlock;
